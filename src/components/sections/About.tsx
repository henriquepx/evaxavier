import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import evaAbout from '@/assets/eva_about.jpg';

export function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] relative w-full overflow-hidden">
              <img 
                src={evaAbout} 
                alt="Eva Xavier no escritório" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 border border-border/40 scale-[0.96]" />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 -z-10 blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-12 leading-tight">
              {siteConfig.about.title.split(' e ').map((part, i) => (
                <span key={i}>
                  {i === 1 ? <span className="italic font-light">e {part}</span> : part}
                </span>
              ))}
            </h2>

            <div className="space-y-6 mb-16 text-foreground/80 font-sans text-lg font-light leading-relaxed">
              {siteConfig.about.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-border">
              {siteConfig.about.credentials.map((cred, i) => (
                <div key={i} className="text-sm font-sans tracking-wide text-foreground/70">
                  <span className="block w-1.5 h-1.5 bg-secondary mb-2" />
                  {cred}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}