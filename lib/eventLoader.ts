import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GenEvent } from "@/types/event"; 

const EVENT_DIR = path.join(process.cwd(), "content", "event");

export function getEventBySlug(slug: string) {
  const allEvents = getEvents(); 
  
  // Cari event yang slug-nya cocok
  const event = allEvents.find((e) => e.slug === slug);
  
  if (!event) return null;

  const fileName = `event_${event.id}_${slug}.md`;
  const fullPath = path.join(EVENT_DIR, fileName);
  
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content } = matter(fileContents); 
    
    return { ...event, content };
  } catch (error) {
    return null;
  }
}

// Parameter limit opsional (default 0 = ambil semua)
export function getEvents(limit: number = 0): GenEvent[] {
  if (!fs.existsSync(EVENT_DIR)) return [];

  const files = fs.readdirSync(EVENT_DIR);

  const events = files
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(EVENT_DIR, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const slug = fileName.replace(".md", "").split("_").slice(2).join("_") || fileName.replace(".md", "");

      return {
        id: data.id,
        slug: slug,
        title: data.title,
        thumbnail: data.thumbnail || "/images/placeholder.jpg", 
        description: data.description || "Tidak ada deskripsi",
        date: data.date,
        isOpen: Boolean(data.isOpen),
        mitra: data.mitra || "-",
      } as GenEvent;
    });

 
  const sortedEvents = events.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (limit > 0) {
    return sortedEvents.slice(0, limit);
  }

  return sortedEvents;
}