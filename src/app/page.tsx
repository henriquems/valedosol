'use client'

import About from "@/components/About";
import Benefits from "@/components/Benefis";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Infrastructure from "@/components/Infrastructure";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Infrastructure />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
