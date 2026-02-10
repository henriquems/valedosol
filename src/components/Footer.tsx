import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-zinc-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold">Vivendas</span>
              <span className="block font-serif text-lg text-accent">Morada do Sol</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Condomínio de chácaras em Sabinópolis, MG. 
              Lotes de 1.300m² em um refúgio natural com infraestrutura completa.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Links Rápidos</h4>
            <nav className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Benefícios', href: '#beneficios' },
                { label: 'Infraestrutura', href: '#infraestrutura' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Localização', href: '#localizacao' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Às margens da MG-259<br />
                  Sabinópolis - MG
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+5500000000000"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  (00) 0000-0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:contato@vivendasmoradadosol.com.br"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  contato@vivendasmoradadosol.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Vivendas Morada do Sol. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              CRECI: XX.XXX-J
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
