import { motion } from 'framer-motion';
import { siteConfig } from '@/config';

export function Testimonials() {
  const testimonials = siteConfig.testimonials;

  return (
    <section className="py-32 md:py-48 bg-muted text-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="uppercase tracking-widest text-xs font-medium text-foreground/60 mb-6 font-sans">
            Relatos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif max-w-2xl">
            Histórias de <span className="italic font-light">recomeço</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col relative"
            >
              <span className="text-secondary text-6xl font-serif leading-none absolute -top-8 -left-4 opacity-50">
                &ldquo;
              </span>
              <p className="font-serif text-xl md:text-2xl leading-relaxed mb-8 relative z-10 italic text-foreground/90">
                {t.quote}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-px bg-secondary" />
                <span className="font-sans text-sm font-medium tracking-wide uppercase">
                  {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}