import Image from "next/image";

export default function WelcomePage() {
    return (
        <div className="flex flex-col items-center bg-radix-cream py-64">
            {/* Teks Box */}
            <div className="m-8">
                <h2 className="flex justify-center font-semibold text-4xl">Selamat datang</h2>
                <h2 className="flex justify-center font-semibold text-4xl">para pemimpi!</h2>
            </div>

            {/* ICON */}
            <div className="flex flex-row gap-8">
                <Image
                    className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)] hover:-rotate-3"
                    src="/maskot/MASKOT PR 2.png"
                    width={80}
                    height={80}
                    alt="MaskotPR"
                />

                <Image
                    className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)] hover:rotate-3"
                    src="/maskot/MASKOT LK 2.png"
                    width={80}
                    height={80}
                    alt="MaskotLK"
                />
            </div>

            {/* Tagline */}
            <div className="flex flex-col text-center mt-4 mb-20 [&_span]:text-lg">
                <span>Mari membangun impian bersama</span>
                <span>melalui kolaborasi</span>
            </div>
        </div>
    )
}