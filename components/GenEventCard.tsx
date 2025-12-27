import Link from 'next/link';
import Image from 'next/image';
import { GenEvent } from '@/types/event';

interface GenEventCardProps {
  event: GenEvent;
}

export default function GenEventCard({ event }: GenEventCardProps) {
  // Format Tanggal (Contoh: 10 Agustus 2025)
  const formattedDate = new Date(event.date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <Link
      href={`/event_page/${event.slug}`}
      className="group flex w-full flex-col overflow-hidden rounded-3xl border-2 border-secondary-6 bg-radix-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row"
    >

      {/* BAGIAN THUMBNAIL (Kiri/Atas) */}
      <div className="relative h-48 w-full shrink-0 bg-gray-200 md:h-auto md:w-48 lg:w-56">
        {event.thumbnail ? (
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Placeholder jika thumbnail kosong
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        )}
      </div>

      {/* BAGIAN KONTEN (Kanan/Bawah) */}
      <div className="flex flex-1 flex-col justify-between p-5">

        {/* Info Utama */}
        <div className="mb-4">
          <h3 className="mb-2 font-poppins text-lg font-bold leading-tight text-radix-dark line-clamp-2 group-hover:text-secondary-6 transition-colors">
            {event.title}
          </h3>

          {/* Tanggal & Waktu */}
          <div className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-1">
            <svg className="w-4 h-4 text-secondary-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{formattedDate}</span>
          </div>

          {/* Mitra (Tampilkan hanya jika ada datanya) */}
          {event.mitra && event.mitra !== "-" && (
            <p className="text-xs text-secondary-4 font-medium">
              Mitra: <span className="text-radix-dark">{event.mitra}</span>
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span
            className={`inline-block rounded-full px-4 py-1 text-xs font-bold text-white shadow-sm transition-colors ${event.isOpen ? 'bg-[#5CB85C]' : 'bg-red-500'
              }`}
          >
            {event.isOpen ? 'Terbuka' : 'Tutup'}
          </span>

          <span className="text-xs font-semibold text-secondary-6 group-hover:text-radix-dark">
            Selengkapnya
          </span>
        </div>

      </div>
    </Link>
  );
}