import { useScrollAnimation } from '@/data/hooks/useScrollAnimation';
import { MapPin, Car, Clock } from 'lucide-react';

export default function Location() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="localizacao"
      className="py-20 md:py-32 bg-gradient-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Localização
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Onde Estamos
            <span className="text-primary"> Localizados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Acesso fácil pela MG-259, a poucos minutos de tudo que você precisa.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30213.48891889073!2d-43.11!3d-18.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d85e4c1a1d5d%3A0x3a3c6e8e7b0e7d1a!2sSabin%C3%B3polis%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Vivendas Morada do Sol"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-nature rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-zinc-100" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Endereço
                </h3>
                <p className="text-muted-foreground">
                  Às margens da MG-259<br />
                  Sabinópolis - MG
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-nature rounded-xl flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-zinc-100" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Distância da Cidade
                </h3>
                <p className="text-muted-foreground">
                  Apenas 800 metros do centro de Sabinópolis<br />
                  Acesso rápido e fácil
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-nature rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-zinc-100" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Horário de Visitas
                </h3>
                <p className="text-muted-foreground">
                  Segunda a Sábado: 8h às 18h<br />
                  Domingo: Agendamento prévio
                </p>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-soft">
              <p className="text-foreground font-medium mb-2">
                🌟 Dica: Venha conhecer pessoalmente!
              </p>
              <p className="text-muted-foreground text-sm">
                Agende uma visita e veja de perto toda a beleza natural 
                e a infraestrutura do Vivendas Morada do Sol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
