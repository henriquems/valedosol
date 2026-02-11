'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/data/hooks/useScrollAnimation'
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { toast } from 'react-toastify'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success('Mensagem enviada! Entraremos em contato em breve.')

    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contato"
      className="bg-green-900 py-16 md:py-32 relative"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center text-zinc-200 max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
            Contato
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Realize Seu Sonho
            <span className="text-accent"> Agora</span>
          </h2>

          <p className="text-base md:text-lg">
            Entre em contato conosco e agende uma visita.
            Estamos prontos para ajudá-lo a encontrar o lote perfeito.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">

            {/* Telefone */}
            <div className="flex sm:items-center gap-4 p-5 md:p-6 bg-green-800 rounded-2xl text-zinc-100">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-8 h-8" />
              </div>
              
              <div className="text-sm md:text-base">
                <h3 className="font-serif text-base md:text-lg font-bold mb-1">
                  Telefone
                </h3>
                <a
                  href="tel:+5500000000000"
                  className="break-words hover:text-accent transition-colors"
                >
                  (00) 0000-0000
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex sm:items-center gap-4 p-5 md:p-6 bg-green-800 rounded-2xl text-zinc-100">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-8 h-8" />
              </div>
              
              <div className="text-sm md:text-base">
                <h3 className="font-serif text-base md:text-lg font-bold mb-1">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words hover:text-accent transition-colors"
                >
                  (00) 00000-0000
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex sm:items-center gap-4 p-5 md:p-6 bg-green-800 rounded-2xl text-zinc-100">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-8 h-8" />
              </div>
              
              <div className="text-sm md:text-base">
                <h3 className="font-serif text-base md:text-lg font-bold mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:contato@vivendasmoradadosol.com.br"
                  className="break-words hover:text-accent transition-colors"
                >
                  contato@vivendasmoradadosol.com.br
                </a>
              </div>
            </div>

            {/* Benefícios */}
            <div className="p-5 md:p-6 bg-green-800 rounded-2xl text-zinc-100 space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 text-yellow-50 shrink-0" />
                <span className="text-sm md:text-base text-yellow-50 font-medium">
                  Lotes a partir de 1.300m²
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 text-yellow-50 shrink-0" />
                <span className="text-sm md:text-base text-yellow-50 font-medium">
                  Financiamento facilitado
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1 text-yellow-50 shrink-0" />
                <span className="text-sm md:text-base text-yellow-50 font-medium">
                  Documentação 100% regularizada
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 bg-green-800 text-zinc-100 rounded-2xl shadow-elevated w-full"
          >
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-6">
              Envie sua mensagem
            </h3>

            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-green-700 border-0 h-12"
              />

              <Input
                name="email"
                type="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-green-700 border-0 h-12"
              />

              <Input
                name="phone"
                type="tel"
                placeholder="Seu telefone/WhatsApp"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-green-700 border-0 h-12"
              />

              <Textarea
                name="message"
                placeholder="Sua mensagem (opcional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-green-700 border-0 resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-900 text-accent-foreground hover:bg-accent/90 h-12 text-base md:text-lg"
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
  )
}
