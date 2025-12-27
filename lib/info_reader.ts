import fs from "fs";
import path from "path";
import matter from "gray-matter";

const infoDirectory = path.join(process.cwd(), "content/info");

export async function getInfoBySlug(slug: string) {
    const fullPath = path.join(infoDirectory, `${slug}.md`);

    try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            content: content,
        };
    } catch (error) {
        console.error(`File ${slug}.md file not found`, error);
        return null;
    }
}