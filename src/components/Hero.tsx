import heroImage from '@/assets/hero-landscape.jpg';
import Image from 'next/image';
import { Button } from './ui/button';
import { Knewave } from 'next/font/google';
import { BookOpenCheck, SearchCheck } from 'lucide-react';

const fonte = Knewave({
  subsets: ["latin"],
  weight: "400", 
  variable: "--font-knewave",
});

export default function Hero() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="inicio"
            className="relative h-230 flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt="Vista panorâmica do Vivendas Morada do Sol"
                    fill
                    className="object-cover z-0 opacity-80"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="flex flex-col gap-6 max-w-4xl mx-auto animate-fade-in">
                    <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-100 bg-clip-text text-transparent">
                        Vivendas Morada do Sol
                    </h1>

                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                        Lotes de 1.300m² com escritura em um refúgio natural a apenas 800 metros da cidade.
                        Viva a tranquilidade do campo com todo o conforto que você merece.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            onClick={() => scrollToSection('#contato')}
                            size="lg"
                            className="bg-yellow-600 hover:bg-yellow-700 text-zinc-100 text-lg px-8 py-6 cursor-pointer"
                        >
                            <div className='flex items-center gap-1'>
                                <SearchCheck className="!w-6 !h-6" />
                                <span>Quero conhecer</span>
                            </div>
                        </Button>

                        <Button
                            onClick={() => scrollToSection('#sobre')}
                            size="lg"
                            variant="outline"
                            className="border-yellow-600 text-white hover:bg-yellow-600 hover:border-yellow-600 hover:text-white text-lg px-8 py-6 cursor-pointer"
                        >
                            <div className='flex items-center gap-1'>
                                <BookOpenCheck className="!w-6 !h-6" />
                                <span>Saiba mais</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};