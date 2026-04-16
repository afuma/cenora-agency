import React from 'react';
import { ArrowRight, Star, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const trust = [
  { icon: Users, value: 'Sur-mesure', label: 'Chaque projet est unique' },
  { icon: Star, value: 'Humain', label: 'Un vrai interlocuteur dédié' },
  { icon: TrendingUp, value: 'Orienté résultats', label: 'Méthode éprouvée' },
];

const bullets = [
  'Site livré en moins de 3 semaines',
  'Visible sur Google dès le premier mois',
  'Accompagnement humain et réactif',
];

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary">Agence web & SEO local</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-6"
          >
            Votre entreprise <span className="gradient-text">visible sur Google</span>, vos clients vous trouvent.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Nous créons des sites web professionnels et optimisons votre référencement local pour attirer de nouveaux clients — sans que vous ayez à vous en occuper.
          </motion.p>

          {/* Bullets */}
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground bg-white dark:bg-card border border-border rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href="#contact">
              <button className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold w-full sm:w-auto justify-center">
                Réserver un audit gratuit
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a href="#portfolio">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold border border-border text-foreground hover:bg-secondary transition-colors w-full sm:w-auto justify-center">
                Voir nos réalisations
              </button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {trust.map((t, i) => (
              <div key={i} className="card-soft rounded-2xl p-4 text-center">
                <t.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">{t.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}