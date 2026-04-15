import React from 'react';
import { Phone, ClipboardList, Code2, Rocket, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Appel découverte gratuit',
    description: 'On échange 30 minutes pour comprendre votre activité, vos objectifs et analyser votre présence en ligne actuelle.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Stratégie sur-mesure',
    description: 'On définit ensemble la meilleure approche : site, SEO, mots-clés, planning. Tout est validé avec vous avant de démarrer.',
    color: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Création de votre site',
    description: 'Design unique, développement responsive, contenu optimisé. Vous validez chaque étape. Livraison en 2 à 3 semaines.',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Mise en ligne & SEO',
    description: 'On déploie votre site, on configure Google Business et on active les optimisations SEO pour un démarrage rapide.',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: BarChart3,
    number: '05',
    title: 'Suivi & amélioration continue',
    description: 'Rapport mensuel, ajustements SEO réguliers et accompagnement humain pour maximiser vos résultats dans la durée.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
];

export default function Methodology() {
  return (
    <section id="methode" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50/70">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Notre méthode</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Simple, clair, <span className="gradient-text">efficace</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Un processus éprouvé pour des résultats prévisibles — sans mauvaise surprise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-soft bg-white rounded-2xl p-5 flex items-start gap-5"
            >
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                <step.icon className={`w-5 h-5 ${step.iconColor}`} />
              </div>
              <div>
                <div className={`text-xs font-bold ${step.iconColor} mb-1`}>Étape {step.number}</div>
                <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}