import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { PracticeAreas } from '@/components/sections/PracticeAreas';
import { Process } from '@/components/sections/Process';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FloatingWhatsApp } from '@/components/sections/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <PracticeAreas />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}