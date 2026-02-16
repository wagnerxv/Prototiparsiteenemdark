import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Subjects } from '@/components/Subjects';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { GridBackground } from '@/components/ui/grid-background'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden selection:bg-pink-500/30 selection:text-white">
      {/* Fundo Global */}
      <GridBackground />
      
      <Header />
      
      <div id="home" className="relative z-10">
        <Hero />
      </div>
      
      <div id="materias" className="relative z-10">
        <Subjects />
      </div>
      
      <div className="relative z-10">
        <Benefits />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
      
      <FloatingWhatsApp />
    </main>
  );
}