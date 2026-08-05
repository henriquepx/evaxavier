import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4 }}
          href={siteConfig.contact.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-foreground text-background text-sm font-sans px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
            Fale conosco
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}