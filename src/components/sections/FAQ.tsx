import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export function FAQ() {
  const faqs = siteConfig.faq;

  return (
    <section className="py-32 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Accordion.Item value={`item-${i}`} className="border-b border-border overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex justify-between items-center py-6 text-left group">
                    <span className="font-serif text-xl md:text-2xl group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-foreground/50 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-foreground/70 font-sans font-light text-lg data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-6 pr-12 leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}