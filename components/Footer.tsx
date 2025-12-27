"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()

    const getIconColor = (path: string) => {
        return pathname === path ? "bg-radix-red" : "bg-secondary-4"
    }

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center bg-gray-300 p-6 gap-14 rounded-full">
            {/* 1. Home Button */}
            <Link
                href="/"
                className="hover:scale-125 transition-transform duration-300"
            >
                <div
                    className={`w-10 h-10 transition-colors duration-300 ${getIconColor('/')}`}
                    style={{
                        maskImage: "url('/icon/home-icon.svg')",
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "url('/icon/home-icon.svg')",
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                    }}
                />
            </Link>

            {/* 2. Event Button */}
            <Link
                href="/event_page"
                className="hover:scale-125 transition-transform duration-300"
            >
                <div
                    className={`w-10 h-10 duration-300 ${getIconColor('/event_page')}`}
                    style={{
                        maskImage: "url('/icon/calendar-icon.svg')",
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "url('/icon/calendar-icon.svg')",
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                    }}
                />
            </Link>

            {/* 3. Contact Button */}
            <Link
                href="/contact"
                className="hover:scale-125 transition-transform duration-300"
            >
                <div
                    className={`w-10 h-10 hover:bg-radix-red transition-colors duration-300 ${getIconColor('/contact')}`}
                    style={{
                        maskImage: "url('/icon/call-icon.svg')",
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "url('/icon/call-icon.svg')",
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                    }}
                />
            </Link>
        </div>
    )
}