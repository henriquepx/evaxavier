import { motion } from 'framer-motion';
import { siteConfig } from '@/config';

export function Process() {
  const steps = siteConfig.process;

  return (
    <section className="py-32 md:py-48 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8">
              A Jornada.
            </h2>
            <p className="font-sans font-light text-background/70 text-lg md:text-xl max-w-2xl">
              Um processo legal não precisa ser frio. Desenhamos um caminho claro para que você saiba exatamente onde estamos e para onde vamos.
            </p>
          </motion.div>

          <div className="relative space-y-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-background/20" />
            
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative pl-12 md:pl-24 group"
              >
                <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] bg-background rounded-full transition-transform duration-500 group-hover:scale-150" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-4">
                  <span className="text-secondary font-serif text-3xl italic">
                    {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans font-light text-background/70 text-lg max-w-xl leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}