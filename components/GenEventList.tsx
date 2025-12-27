'use client';

import React, { useState, useMemo } from 'react';
import GenEventCard from './GenEventCard';
import ButtonGenFilter from './ButtonGenFilter';
import SearchButton from './SearchButton';
import Image from 'next/image';
import { GenEvent } from '@/types/event';

interface GenEventListProps {
    initialData: GenEvent[];
}

export default function GenEventList({ initialData }: GenEventListProps) {
    const [sortType, setSortType] = useState<'newest' | 'oldest' | 'az' | 'za'>('newest');
    const [searchTerm, setSearchTerm] = useState('');

    const processedEvents = useMemo(() => {
        // Filtering
        const filtered = initialData.filter((item) => {
            const lowerTerm = searchTerm.toLowerCase();
            // Search
            return item.title.toLowerCase().includes(lowerTerm) ||
                (item.mitra && item.mitra.toLowerCase().includes(lowerTerm));
        });

        // Sorting
        return filtered.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            switch (sortType) {
                case 'newest': return dateB - dateA;
                case 'oldest': return dateA - dateB;
                case 'az': return a.title.localeCompare(b.title);
                case 'za': return b.title.localeCompare(a.title);
                default: return 0;
            }
        });
    }, [initialData, sortType, searchTerm]);

    return (
        <section className="w-full mb-36">
            <SearchButton onSearch={(keyword) => setSearchTerm(keyword)} />

            {/* Filter dan Sorting */}
            <div className="my-6 flex flex-row gap-3 md:gap-6">
                <ButtonGenFilter
                    label="Sort"
                    icon={<Image src="/icon/sort-icon.png" alt="icon" width={20} height={15} />}
                    items={[
                        { label: "Terbaru (Newest)", onClick: () => setSortType('newest') },
                        { label: "Terlama (Oldest)", onClick: () => setSortType('oldest') },
                        { label: "Abjad (A-Z)", onClick: () => setSortType('az') },
                        { label: "Abjad (Z-A)", onClick: () => setSortType('za') },
                    ]}
                />
                <ButtonGenFilter

                    label="Category"
                    icon={<Image src="/icon/category-icon.png" alt="icon" width={15} height={15} />}
                    items={[
                        { label: "Pendidikan" },
                        { label: "Sosial" },
                        { label: "Lingkungan" },
                        { label: "Healing" },
                    ]}
                />

            </div>

            {/* RENDERING LIST KARTU */}
            {processedEvents.length > 0 ? (
                <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
                    {processedEvents.map((event) => (
                        <GenEventCard key={event.id} event={event} />
                    ))}
                </div>
            ) : (
                // Tampilan kalau hasil pencarian kosong
                <div className="py-20 text-center border-2 border-dashed border-secondary-10 rounded-3xl bg-radix-cream/30">
                    <p className="text-secondary-4 font-semibold text-lg">Tidak ada hasil ditemukan</p>
                    <p className="text-gray-500 text-sm">Coba kata kunci lain</p>
                </div>
            )}

        </section>
    );
}