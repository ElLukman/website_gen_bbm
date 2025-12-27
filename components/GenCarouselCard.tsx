import { getInfoBySlug } from "@/lib/info_reader";
import GenCarouselCardClient from "./client/GenCarouselCardClient";

interface GenCarouselCardProps {
    slug: string;
    className?: string;
}

export default async function GenCarouselCard({ slug, className }: GenCarouselCardProps) {
    // Fetch data dari file system (Server Side Operation)
    const data = await getInfoBySlug(slug);

    // Error Handling: Jika file tidak ditemukan
    if (!data) {
        return (
            <div className="p-10 text-center text-red-500 border border-red-200 rounded-xl bg-red-50">
                Error: Data testimonial "{slug}" tidak ditemukan.
            </div>
        );
    }

    // Parsing Content: Mengubah string JSON di .md menjadi Array Object
    let items = [];
    try {
        items = JSON.parse(data.content);
    } catch (error) {
        console.error("Gagal parsing JSON dari Markdown:", error);
        return <div className="text-center text-red-500">Format data .md tidak valid (Harus JSON Array).</div>;
    }

    // Render Client Component dengan data yang sudah bersih
    return (
        <section className={`w-full py-16 ${className}`}>
            {/* Judul Section static di server */}
            <h2 className="text-center font-poppins text-3xl md:text-4xl font-bold text-secondary-2 mb-8">
                {data.title || "Apa kata mereka?"}
            </h2>

            <GenCarouselCardClient items={items} />
        </section>
    );
}