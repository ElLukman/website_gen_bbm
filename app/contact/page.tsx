'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulasi pengiriman data
        setTimeout(() => {
            setShowAlert(true);
            setEmail("gen.impianbandung@gmail.com");
            setNote("");

            // Alert otomatis setelah 3 detik
            setTimeout(() => setShowAlert(false), 3000);
        }, 500);
    };

    return (
        <main className="min-h-screen w-full pb-32 bg-[#FDFDFD] font-poppins text-radix-dark">

            {/* --- ALERT FLOWBITE (Fixed Top) --- */}
            {showAlert && (
                <div className="fixed top-5 left-1/2 z-50 flex -translate-x-1/2 items-center rounded-lg bg-green-50 p-4 mb-4 text-green-800 shadow-lg border border-green-200" role="alert">
                    <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div className="ms-3 text-sm font-medium">
                        Pesan berhasil terkirim! Terima kasih telah menghubungi kami.
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowAlert(false)}
                        className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}

            <div className="mx-auto max-w-md px-6 md:px-0 py-12">

                {/* SOSMED CARD */}
                <div className="mb-10 w-full rounded-4xl bg-[#E5E5E5] px-6 py-10 text-center shadow-lg">
                    <h2 className="mb-1 text-xl font-bold text-black">Main ke sosmed kita</h2>
                    <p className="mb-8 text-sm text-gray-600">
                        Biar nggak ketinggalan cerita<br />terbaru dari Gen-BBM!
                    </p>

                    <div className="flex flex-col gap-5 text-left text-sm font-medium text-black px-4">
                        {/* Instagram */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </div>
                            <Link href="https://www.instagram.com/genbbm.official/" target="_blank" className="hover:text-base hover:duration-300 hover:transition-all">Our Instagram!</Link>
                        </div>

                        {/* TikTok */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                            </div>
                            <Link href="https://www.tiktok.com/@genbbm.official?lang=en" target="_blank" className="hover:text-base hover:duration-300 hover:transition-all">Our TikTok!</Link>
                        </div>

                        {/* YouTube */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </div>
                            <span>youtube.com/genbbm_channel</span>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </div>
                            <span>chat.whatsapp.com/invite/xxxxx</span>
                        </div>
                    </div>
                </div>

                {/* FORM CONTACT */}
                <form onSubmit={handleSubmit} className="mb-12 flex flex-col gap-6">

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-bold text-secondary-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="loremipsum@gmail.com"
                            required
                            className="w-full rounded-2xl border-none bg-primary-12/50 px-5 py-3 text-sm text-radix-dark placeholder:text-gray-400 focus:ring-2 focus:ring-secondary-6"
                        />
                    </div>

                    {/* Note Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="note" className="text-sm font-bold text-secondary-2">Note:</label>
                        <textarea
                            id="note"
                            rows={4}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Tulis pesan anda di sini"
                            required
                            className="w-full resize-none rounded-2xl border-none bg-primary-12/50 px-5 py-3 text-sm text-radix-dark placeholder:text-gray-400 focus:ring-2 focus:ring-secondary-6"
                        />
                    </div>

                    {/* Tombol Kirim */}
                    <button
                        type="submit"
                        className="mt-2 w-full self-center rounded-full bg-primary-4 px-12 py-3 font-bold text-white shadow-md transition-all cursor-pointer hover:bg-primary-2 hover:shadow-lg active:scale-95 sm:w-auto "
                    >
                        Kirim
                    </button>
                </form>

                {/* DONASI / QRIS */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="mb-6 text-2xl font-bold leading-tight text-black">
                        Yuk Bantu Gen-BBM<br />Terus Jalan
                    </h2>

                    {/* Logo QRIS Placeholder */}
                    <div className="mb-2">
                        <span className="font-extrabold text-xl tracking-widest text-black">QRIS</span>
                    </div>

                    {/* Gambar QR Code */}
                    <div className="mb-4 relative h-48 w-48 overflow-hidden rounded-xl border-2 border-black">
                        <Image
                            src="/icon/qr_dummy.png"
                            alt="QRIS Gen-BBM"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Info Bank */}
                    <div className="space-y-1 text-sm font-medium text-black">
                        <p>Mandiri</p>
                        <p className="text-lg font-bold">000000000000 : Gen BBM</p>
                        <p className="mt-2">GoPay</p>
                        <p className="text-lg font-bold">0912-1920-1920 : Gen BBM</p>
                    </div>
                </div>

            </div>
        </main>
    );
}