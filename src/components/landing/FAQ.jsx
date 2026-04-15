import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Y a-t-il un engagement contractuel ?',
    answer: "Non. Nos offres sont sans engagement longue durée. Vous pouvez résilier avec un préavis de 30 jours. Nous préférons vous fidéliser par la qualité de notre travail.",
  },
  {
    question: 'Suis-je propriétaire de mon site ?',
    answer: "Oui, à 100%. Vous êtes propriétaire du code, du design et de tout le contenu. En cas de départ, on vous transfère l'intégralité des accès et fichiers.",
  },
  {
    question: 'Combien de temps pour créer mon site ?',
    answer: "En moyenne 2 à 3 semaines pour un site vitrine. Tout dépend de la complexité et de la réactivité pour les retours. Un planning précis est établi dès le démarrage.",
  },
  {
    question: 'Quand vais-je voir des résultats SEO ?',
    answer: "Le SEO local porte ses fruits en 4 à 8 semaines. Le SEO national prend 3 à 6 mois. Nous communiquons des résultats transparents chaque mois.",
  },
  {
    question: 'La maintenance est-elle incluse ?',
    answer: "Oui : mises à jour, sécurité, sauvegardes régulières sont incluses. Les petites modifications de contenu aussi. Les évolutions majeures font l'objet d'un devis à part.",
  },
  {
    question: 'Vous travaillez avec quels types de clients ?',
    answer: "Artisans, commerçants, professions libérales, restaurants, gîtes, cabinets médicaux, PME industrielles... Toute entreprise qui veut développer sa visibilité locale.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="blob-2 absolute -right-20 top-1/4 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="blob-3 absolute -left-16 bottom-1/4 w-64 h-64 rounded-full bg-violet-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">FAQ</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Questions <span className="gradient-text">fréquentes</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-soft rounded-xl border-none px-5 bg-white"
              >
                <AccordionTrigger className="text-left text-foreground text-sm font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}