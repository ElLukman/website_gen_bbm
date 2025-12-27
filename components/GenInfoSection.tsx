// components/GenInfoSection.tsx
import { getInfoBySlug } from "@/lib/info_reader";

interface GenInfoSectionProps {
  slug: string;
  lineHeight?: string;
}

export default async function GenInfoSection({
  slug,
  lineHeight = "leading-loose"
}: GenInfoSectionProps) {

  const data = await getInfoBySlug(slug);
  if (!data) return null;

  return (
    <div className="container mx-auto max-w-7xl mb-8 text-justify">
      <h2 className="text-xl md:text-4xl font-semibold mb-4 font-poppins text-gray-900">
        {data.title}
      </h2>

      <p className={`text-sm md:text-xl font-poppins text-gray-700 whitespace-pre-line ${lineHeight} `}>
        {data.content}
      </p>
    </div>
  );
}