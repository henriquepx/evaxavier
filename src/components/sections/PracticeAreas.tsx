import { motion } from 'framer-motion';
import { siteConfig } from '@/config';

export function PracticeAreas() {
  const areas = siteConfig.practiceAreas;

  return (
    <section className="py-32 bg-card text-card-foreground">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="uppercase tracking-widest text-xs font-medium text-foreground/60 mb-4 block font-sans">
            Áreas de Atuação
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Especialidades
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-card p-12 md:p-16 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-secondary font-serif text-xl mb-4 italic">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <h3 className="text-2xl md:text-3xl font-serif mb-6 group-hover:text-primary transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-foreground/70 font-sans font-light leading-relaxed mt-auto max-w-sm">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}