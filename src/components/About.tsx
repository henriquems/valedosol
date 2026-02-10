import { useScrollAnimation } from '@/data/hooks/useScrollAnimation';
import countryLifeImage from '@/assets/country-life.jpg';
import Image from 'next/image';

export default function About() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            id="sobre"
            className="py-20 md:py-32 bg-gradient-section"
        >
            <div className="container mx-auto px-4">
                <div
                    ref={ref}
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'
                        }`}
                >
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                            <div className="relative w-full h-[400px] md:h-[500px]">
                                <Image
                                    src={countryLifeImage}
                                    alt="Vida no campo - Vivendas Morada do Sol"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-accent-foreground p-6 rounded-2xl shadow-accent hidden md:block">
                            <span className="block text-3xl font-bold font-serif">1.300m²</span>
                            <span className="text-sm">por lote</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            Sobre o Empreendimento
                        </span>

                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Seu Refúgio no
                            <span className="text-primary"> Campo</span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            O <strong className="text-foreground">Vivendas Morada do Sol</strong> é um condomínio
                            de chácaras cuidadosamente planejado para quem busca qualidade de vida,
                            contato com a natureza e tranquilidade, sem abrir mão da praticidade
                            de estar próximo à cidade.
                        </p>

                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Localizado às margens da MG-259, a apenas 800 metros de Sabinópolis,
                            nossos lotes de 1.300m² estão situados em um terreno quase plano com
                            leve inclinação, proporcionando uma vista deslumbrante das montanhas
                            e do verde exuberante da região.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                                <span className="block text-2xl md:text-3xl font-bold text-primary font-serif">800m</span>
                                <span className="text-muted-foreground text-sm">da cidade</span>
                            </div>
                            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                                <span className="block text-2xl md:text-3xl font-bold text-primary font-serif">MG-259</span>
                                <span className="text-muted-foreground text-sm">fácil acesso</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
