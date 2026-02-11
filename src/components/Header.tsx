'use client'

import { useState, useEffect } from 'react';
import { Menu, X, Home, GalleryVertical, Building2, MapPin, MailCheck, FileText, PackagePlus, CalendarCheck } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';

const navLinks = [
  { icon: <Home size={15} />, label: 'Início', href: '#inicio' },
  { icon: <FileText size={15} />, label: 'Sobre', href: '#sobre' },
  { icon: <PackagePlus size={15} />, label: 'Benefícios', href: '#beneficios' },
  { icon: <Building2 size={15} />, label: 'Infraestrutura', href: '#infraestrutura' },
  { icon: <GalleryVertical size={15} />, label: 'Galeria', href: '#galeria' },
  { icon: <MapPin size={15} />, label: 'Localização', href: '#localizacao' },
  { icon: <MailCheck size={15} />, label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`flex text-sm items-center gap-1 hover:bg-green-800 rounded-lg p-2 hover:text-white transition-colors duration-300 cursor-pointer ${isScrolled ? 'text-black' : 'text-zinc-700'}`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex">
          
          <Button
            onClick={() => scrollToSection('#contato')}
            className="bg-green-800 hover:bg-green-700 rounded-lg p-2 h-11 text-white cursor-pointer"
          >
            <CalendarCheck />
            Agende uma Visita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated animate-slide-up">
          <nav className="container mx-auto px-2 py-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-1 text-white text-left py-2 hover:text-accent 
                  transition-colors bg-green-800 hover:bg-green-700 rounded-lg p-2"
              >
                {link.icon}
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contato')}
              className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Agende uma Visita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};