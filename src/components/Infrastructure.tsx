import { useScrollAnimation } from '@/data/hooks/useScrollAnimation';
import chapelImage from '@/assets/chapel.jpg';
import trailImage from '@/assets/trail.jpg';
import masterplanImage from '@/assets/masterplan.jpg';
import Image from 'next/image';

const infrastructureItems = [
  {
    image: chapelImage,
    title: 'Capela',
    description: 'Uma bela capela no ponto mais alto do condomínio, perfeita para momentos de paz e celebrações especiais.',
  },
  {
    image: trailImage,
    title: 'Pista de Caminhada',
    description: 'Trilha pavimentada cercada de natureza para suas caminhadas matinais e exercícios ao ar livre.',
  },
  {
    image: masterplanImage,
    title: 'Praça Central',
    description: 'Área de convivência no coração do condomínio, ideal para encontros e momentos em família.',
  },
];

export default function Infrastructure() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="infraestrutura"
      className="py-20 md:py-32 bg-gradient-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Infraestrutura
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Estrutura Pensada
            <span className="text-primary"> Para Você</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O Vivendas Morada do Sol conta com infraestrutura completa para proporcionar 
            conforto e qualidade de vida a todos os moradores.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {infrastructureItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden shadow-elevated"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-100 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};