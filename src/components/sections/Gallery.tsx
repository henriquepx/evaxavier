import { motion } from 'framer-motion';
import office1 from '/escritorio1.webp';
import office2 from '/escritorio2.webp';
import office3 from '/escritorio3.webp';
import office4 from '/escritorio5.jpg';

const images = [
  { src: office1, alt: "Interior do escritório - Sala de reuniões", className: "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-[600px]" },
  { src: office2, alt: "Detalhes elegantes - Orquídeas e mesa", className: "col-span-1 row-span-1 aspect-square md:aspect-auto md:h-[288px]" },
  { src: office3, alt: "Sala de espera acolhedora", className: "col-span-1 row-span-1 aspect-square md:aspect-auto md:h-[288px]" },
  { src: office4, alt: "Livros de direito clássicos", className: "col-span-2 row-span-1 aspect-[2/1] md:aspect-auto md:h-[288px]" },
];

export function Gallery() {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground max-w-lg">
            Um ambiente pensado para o seu <span className="italic font-light">acolhimento</span>.
          </h2>
          <p className="font-sans font-light text-foreground/70 text-right max-w-xs">
            Cada detalhe do nosso espaço foi criado para transmitir serenidade e segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden group ${img.className}`}
            >
              <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}