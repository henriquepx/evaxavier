import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import { ArrowUpRight, Instagram, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-32 md:py-48 bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -z-10 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Vamos conversar?
            </h2>
            <p className="font-sans font-light text-background/70 text-lg md:text-xl mb-12 max-w-md">
              Dê o primeiro passo. Estamos aqui para ouvir você com absoluta confidencialidade e preparo técnico.
            </p>

            <a 
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 text-2xl md:text-3xl font-serif hover:text-secondary transition-colors duration-300 group mb-16"
            >
              {siteConfig.contact.whatsapp}
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-sans font-light tracking-wide">{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-sans font-light tracking-wide">{siteConfig.contact.instagram}</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-sans font-light tracking-wide">{siteConfig.contact.address}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[400px] lg:h-full min-h-[400px] bg-background/5 relative"
          >
            <img
                    src="/footer.webp"
                    alt="Eva Xavier"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
            <div className="absolute inset-0 border border-background/10 scale-[0.95]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}