import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getEventBySlug, getEvents } from '@/lib/eventLoader';
import Markdown from 'react-markdown';

export async function generateStaticParams() {
  const events = getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] px-6 py-10 font-poppins text-radix-dark">
      <div className="mx-auto max-w-3xl mb-32">

        {/* Tombol Return */}
        <Link
          href="/event_page"
          className="cursor-pointer mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary-6 transition-colors hover:text-secondary-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Kembali
        </Link>

        {/* Thumbnail Image */}
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-[30px] shadow-sm md:h-100">
          {event.thumbnail ? (
            <Image
              src={event.thumbnail}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            // Fallback kalau gak ada gambar
            <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
              <span className="text-sm">Tidak ada gambar</span>
            </div>
          )}
        </div>

        <h1 className="mb-4 text-2xl font-bold leading-snug md:text-4xl text-secondary-2">
          {event.title}
        </h1>

        {/* Tanggal dan Mitra Acara */}
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span>{formattedDate}</span>
          </div>
          {event.mitra && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>Mitra: {event.mitra}</span>
            </div>
          )}
        </div>

        <hr className="mb-8 border-gray-200" />

        {/* Deskripsi Acara */}
        <article className="prose prose-lg max-w-none text-justify text-radix-dark prose-headings:font-bold prose-headings:text-secondary-2 prose-a:text-blue-600 prose-img:rounded-xl">
          <Markdown>{event.description}</Markdown>
        </article>



        {/* Status Terbuka/Tidak */}


        <div className="mt-6">
          <span className="font-semibold">
            Status:
          </span>
        </div>

        <div className="mt-4 gap-4">
          {event.isOpen ? (
            <button className="rounded-full bg-secondary-6 px-8 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105">
              Terbuka
            </button>
          ) : (
            <button className="cursor-not-allowed rounded-full bg-secondary-4 px-8 py-3 text-sm font-bold text-white shadow-sm opacity-80">
              Selesai
            </button>
          )}
        </div>

      </div>
    </main>
  );
}