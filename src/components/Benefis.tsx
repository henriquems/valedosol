import { useScrollAnimation } from '@/data/hooks/useScrollAnimation';
import { 
  Trees, 
  Mountain, 
  Droplets, 
  Bird, 
  Sun, 
  Shield, 
  MapPin, 
  Ruler 
} from 'lucide-react';

const benefits = [
  {
    icon: Trees,
    title: 'Muito Verde',
    description: 'Área totalmente arborizada com vegetação nativa preservada',
  },
  {
    icon: Mountain,
    title: 'Vista Panorâmica',
    description: 'Terreno com leve inclinação que proporciona vistas deslumbrantes',
  },
  {
    icon: Droplets,
    title: 'Água Abundante',
    description: 'Região com nascentes e água em abundância para seu conforto',
  },
  {
    icon: Bird,
    title: 'Natureza Viva',
    description: 'Ambiente perfeito para criação de animais e vida no campo',
  },
  {
    icon: Sun,
    title: 'Clima Agradável',
    description: 'Temperatura amena o ano todo com sol radiante',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Condomínio fechado com toda a tranquilidade para sua família',
  },
  {
    icon: MapPin,
    title: 'Localização Privilegiada',
    description: 'A apenas 800m da cidade, próximo a tudo que você precisa',
  },
  {
    icon: Ruler,
    title: 'Lotes Generosos',
    description: 'Terrenos de 1.300m² para você construir o lar dos seus sonhos',
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="beneficios"
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Por Que Escolher
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefícios de Viver no
            <span className="text-primary"> Morada do Sol</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra todas as vantagens de ter sua chácara em um dos lugares mais 
            bonitos da região de Sabinópolis.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 bg-stone-100 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-nature rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-zinc-100" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
