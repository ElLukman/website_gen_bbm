

// Import Komponen
import WelcomePage from "@/components/WelcomePage";
import ButtonGen from "@/components/ButtonGen";
import GenInfoSection from "@/components/GenInfoSection";
import GenAccordion from "@/components/GenAccordion";
import GenCarouselCard from "@/components/GenCarouselCard";
import { EventCarousel } from "@/components/EventCarousel";
import { getEvents } from "@/lib/eventLoader"


// Homepage
export default function Home() {
  const carouselSlides = getEvents(5);

  return (
    <>
      <WelcomePage />
      <section className="w-full mb-8 ">
        <div className="container mx-auto max-w-7xl px-4 py-12 flex flex-col items-center">
          <EventCarousel slides={carouselSlides} />
          <span className="font-semibold text-2xl md:text-4xl">Mau Ikut Gabung?</span>
          <ButtonGen href="/event_page">mau dongg</ButtonGen>
        </div>
      </section>

      <section className="w-full bg-radix-cream pt-16 pb-32">
        <div className="mx-auto max-w-4xl px-8">
          <div className="mb-16">
            <GenInfoSection slug="about_genbbm" lineHeight="leading-normal" />
          </div>

          <div className="my-8">
            <GenAccordion slug="visi_genbbm" />
          </div>

          <div className="my-8">
            <GenAccordion slug="misi_genbbm" />
          </div>

          <div className="my-8">
            <GenAccordion slug="sejarah_genbbm" />
          </div>

        </div>
      </section>

      <section className="w-full pt-8 pb-32">
        <GenCarouselCard slug="testimonials" />
      </section>
    </>
  );
}
