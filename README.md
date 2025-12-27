# 🚀 Gen-BBM Official Website

> **Generasi Berani Bangun Mimpi** - Platform digital untuk kolaborasi, informasi event, dan inspirasi bagi pemuda Indonesia.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38b2ac)

Website ini dibangun sebagai portal utama komunitas **Gen-BBM**. Tujuannya adalah menyajikan informasi kegiatan (event), dokumentasi, testimoni member, dan sarana kontak publik dengan tampilan yang modern, responsif, dan interaktif.

Projek ini dikembangkan menggunakan **Modern Web Stack** dengan fokus pada performa (SEO Friendly) dan pengalaman pengguna (UX) yang mulus.

## Teknologi yang Digunakan

* **Framework**: [Next.js App Router](https://nextjs.org/) (React Server Components)
* **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Typing)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: Heroicons / SVG Native
* **Deployment**: [Vercel](https://vercel.com/)

## 📂 Struktur Folder

```bash
├── app/
│   ├── events/         # Halaman List & Detail Event ([slug])
│   ├── contact/        # Halaman Kontak
│   ├── layout.tsx      # Layout utama (Navbar/Footer)
│   └── page.tsx        # Homepage
├── components/         # Komponen UI (Card, Button, Navbar)
├── lib/                # Logika bisnis (Load Markdown, Sort Data)
├── public/             # Aset statis (Gambar, Icon)
└── content/            # Data Event (File .md)

Website ini juga masih dalam tahap pengembangan sehingga ke depannya masih akan terjadi banyak perubahan