import { useState } from 'react';
import { useScrollAnimation } from '@/data/hooks/useScrollAnimation';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contato"
      className="bg-green-900 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-zinc-200 max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Realize Seu Sonho
            <span className="text-accent"> Agora</span>
          </h2>
          <p className="text-lg">
            Entre em contato conosco e agende uma visita. 
            Estamos prontos para ajudá-lo a encontrar o lote perfeito.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-green-800 rounded-2xl text-zinc-100">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <Phone className="w-9 h-9 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">
                  Telefone
                </h3>
                <a 
                  href="tel:+5500000000000" 
                  className="hover:text-accent transition-colors"
                >
                  (00) 0000-0000
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-green-800 rounded-2xl text-zinc-100">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <MessageCircle className="w-9 h-9 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-primary-foreground mb-1">
                  WhatsApp
                </h3>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (00) 00000-0000
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-green-800 rounded-2xl text-zinc-100">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <Mail className="w-9 h-9 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-primary-foreground mb-1">
                  E-mail
                </h3>
                <a 
                  href="mailto:contato@vivendasmoradadosol.com.br" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  contato@vivendasmoradadosol.com.br
                </a>
              </div>
            </div>

            <div className="p-6 bg-green-800 rounded-2xl text-zinc-100">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-yellow-50" />
                <span className="text-yellow-50 font-medium">Lotes a partir de 1.300m²</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-yellow-50" />
                <span className="text-yellow-50 font-medium">Financiamento facilitado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-50" />
                <span className="text-yellow-50 font-medium">Documentação 100% regularizada</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="p-8 bg-green-800 text-zinc-100 rounded-2xl shadow-elevated"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Envie sua mensagem
            </h3>
            
            <div className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-green-700 border-0 h-12"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-green-700 border-0 h-12"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Seu telefone/WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-green-700 border-0 h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Sua mensagem (opcional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-green-700 border-0 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-900 text-accent-foreground hover:bg-accent/90 shadow-accent h-12 text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};