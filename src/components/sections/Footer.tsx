import { siteConfig } from '@/config';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background/60 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-2xl tracking-widest text-background"
          >
            EVA XAVIER
          </motion.div>

          <div className="flex gap-8 text-sm font-sans font-light">
            <span>{siteConfig.footer.registration}</span>
            <span>{siteConfig.footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}