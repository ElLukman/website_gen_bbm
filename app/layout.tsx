import "./globals.css";
import { Poppins } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import { ThemeModeScript } from 'flowbite-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export default function RootLayout( {children}: {children: React.ReactNode} ) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>GenBBM</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <ThemeModeScript />
      </head>

      <body>
        <div>
          <header>
            <Navbar />
          </header>
        </div>
        <main>
          {children}
        </main>
        <footer>
            <Footer />
        </footer>
      </body>
    </html>

  )
}
