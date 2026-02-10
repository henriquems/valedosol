import { useState } from 'react';
import { useScrollAnimation } from '@/data/hooks/useScrollAnimation';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-landscape.jpg';
import chapelImage from '@/assets/chapel.jpg';
import trailImage from '@/assets/trail.jpg';
import countryLifeImage from '@/assets/country-life.jpg';
import panoramicImage from '@/assets/panoramic-view.jpg';
import masterplanImage from '@/assets/masterplan.jpg';
import Image, { StaticImageData } from 'next/image';

const galleryImages = [
    { src: heroImage, alt: 'Vista aérea do empreendimento' },
    { src: panoramicImage, alt: 'Vista panorâmica das montanhas' },
    { src: chapelImage, alt: 'Capela do condomínio' },
    { src: trailImage, alt: 'Pista de caminhada' },
    { src: countryLifeImage, alt: 'Vida no campo' },
    { src: masterplanImage, alt: 'Planta do loteamento' },
];

export default function Gallery() {
    const { ref, isVisible } = useScrollAnimation();
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    return (
        <section
            id="galeria"
            className="py-20 md:py-32 bg-background"
        >
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        Galeria
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Conheça o
                        <span className="text-primary"> Morada do Sol</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Explore as belezas naturais e a infraestrutura do nosso empreendimento.
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'
                        }`}
                >
                    {galleryImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(image.src)}
                            className={`relative overflow-hidden rounded-xl group cursor-pointer ${index === 0 ? 'col-span-2 row-span-2' : ''
                                }`}
                        >
                            <div
                                className={`relative w-full overflow-hidden ${index === 0 ? 'h-[300px] md:h-[500px]' : 'h-[150px] md:h-[240px]'
                                    }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    {selectedImage && (
                        <div
                            className="relative max-w-full max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Imagem ampliada"
                                className="object-contain rounded-lg"
                                width={1200}
                                height={800}
                            />
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};
