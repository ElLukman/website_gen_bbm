import { getInfoBySlug } from "@/lib/info_reader";
import GenAccordionClient from "./client/GenAccordionClient"; 

interface GenAccordionProps {
    slug: string;
    className?: string; 
}

export default async function GenAccordion({ slug, className }: GenAccordionProps) {
    const data = await getInfoBySlug(slug);

    if (!data) return null;

    return (
        <div className={className}>
            <GenAccordionClient
                title={data.title}
                content={data.content}
            />
        </div>
    );
}