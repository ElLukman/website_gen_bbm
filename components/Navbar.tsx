import Link from "next/link"
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full bg-linear-to-r from-radix-blue to-radix-dark py-4">
            <Link href="#">
                <div className="flex flex-row justify-center gap-3">
                    <div className="py-2">
                        <Image src="/logo/lg_genbbm.png" alt="LogoGenBBM" width={24} height={24}></Image>
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className="text-white font-semibold text-lg leading-none tracking-wide uppercase font-poppins">
                            Generasi Berani
                        </span>
                        <span className="text-white font-semibold text-lg leading-none tracking-wide uppercase font-poppins">
                            Bangun Mimpi
                        </span>
                    </div>
                </div>
            </Link>
        </nav>
    );
}