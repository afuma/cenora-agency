import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: 'L\'abonnement maintenance est-il obligatoire ?',
    answer: "Non, l'abonnement à 50€/mois est optionnel. Si vous ne souscrivez pas, nous vous fournissons un guide numérique complet pour gérer votre site en autonomie. L'abonnement inclut : hébergement, nom de domaine, maintenance technique, support client et modifications mineures.",
  },
  {
    question: 'Que comprend l\'abonnement à 50€/mois ?',
    answer: "L'abonnement inclut : hébergement professionnel, nom de domaine, maintenance technique (mises à jour, sécurité, sauvegardes), support client prioritaire, modifications mineures de contenu, et configuration d'adresse email professionnelle si besoin.",
  },
  {
    question: 'Suis-je propriétaire de mon site ?',
    answer: "Oui, à 100%. Vous êtes propriétaire du code, du design et de tout le contenu. Nous gérons le transfert de nom de domaine si vous en avez déjà un. En cas de départ, on vous transfère l'intégralité des accès et fichiers.",
  },
  {
    question: 'Combien de temps pour créer mon site ?',
    answer: "En moyenne 2 à 4 semaines selon la complexité. Tout dépend de vos besoins et de la réactivité pour les retours. Un planning précis est établi dès le démarrage.",
  },
  {
    question: 'Quand vais-je voir des résultats SEO ?',
    answer: "Le SEO local porte ses fruits en 4 à 8 semaines. Le SEO national prend 3 à 6 mois. Nous communiquons des résultats transparents chaque mois.",
  },
  {
    question: 'Puis-je transférer mon nom de domaine existant ?',
    answer: "Oui, nous gérons le transfert de votre nom de domaine existant et la configuration de votre adresse email professionnelle si vous en avez une. Le processus est simple et sécurisé.",
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