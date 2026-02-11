import { Knewave } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Knewave ({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});

export default function Logo() {
    return (
        <Link href="/" className={`flex items-center gap-3`}>
            <Image 
                src="/logo.png"
                width={80} 
                height={60} 
                alt=""
            />
            
            <div className="flex flex-col">
                <h1 className={`${fonte.className} text-[15px] bg-gradient-to-r from-yellow-600 via-yellow-800 to-yellow-600 bg-clip-text text-transparent`}>
                    VIVENDAS
                </h1>

                <h1 className={`${fonte.className} text-[20px] bg-gradient-to-r from-yellow-600 via-yellow-800 to-yellow-600 bg-clip-text text-transparent`}>
                    MORADA DO SOL
                </h1>
            </div>
        </Link>
    )
}