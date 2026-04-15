import React from 'react';
import { Check, X, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const plans = [
  {
    name: 'Essentiel',
    badge: null,
    description: 'Pour lancer votre présence en ligne avec un site pro et soigné.',
    pages: 'Jusqu\'à 5 pages',
    delay: '~2 semaines',
    features: [
      { text: 'Site vitrine responsive', ok: true },
      { text: 'Design personnalisé', ok: true },
      { text: 'Formulaire de contact', ok: true },
      { text: 'Optimisation SEO de base', ok: true },
      { text: 'Hébergement & nom de domaine inclus', ok: true },
      { text: 'Référencement local Google Maps', ok: false },
      { text: 'Blog intégré', ok: false },
      { text: 'Suivi mensuel dédié', ok: false },
    ],
    popular: false,
    color: 'border-border',
  },
  {
    name: 'Performance',
    badge: 'Le plus choisi',
    description: 'La solution complète pour attirer des clients et dominer votre marché local.',
    pages: 'Jusqu\'à 10 pages',
    delay: '~3 semaines',
    features: [
      { text: 'Site vitrine premium responsive', ok: true },
      { text: 'Design sur-mesure avancé', ok: true },
      { text: 'Formulaire & prise de RDV en ligne', ok: true },
      { text: 'SEO avancé (15 mots-clés ciblés)', ok: true },
      { text: 'Référencement local & Google Maps', ok: true },
      { text: 'Hébergement, domaine & SSL inclus', ok: true },
      { text: 'Blog intégré', ok: true },
      { text: 'Suivi mensuel dédié', ok: false },
    ],
    popular: true,
    color: 'border-primary/30',
  },
  {
    name: 'Premium',
    badge: 'Accompagnement complet',
    description: 'Stratégie digitale sur-mesure avec suivi actif et résultats garantis.',
    pages: 'Pages illimitées',
    delay: '~4 semaines',
    features: [
      { text: 'Site complet sur-mesure', ok: true },
      { text: 'Branding & identité visuelle', ok: true },
      { text: 'Fonctionnalités avancées (e-shop, espace client…)', ok: true },
      { text: 'SEO premium (30+ mots-clés)', ok: true },
      { text: 'Référencement local multi-zones', ok: true },
      { text: 'Hébergement premium + CDN + SSL', ok: true },
      { text: 'Blog + stratégie de contenu', ok: true },
      { text: 'Suivi mensuel dédié + reporting', ok: true },
    ],
    popular: false,
    color: 'border-border',
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50/70">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="section-label">Nos offres</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Une offre <span className="gradient-text">adaptée à votre besoin</span>
          </motion.h2>
        </div>

        {/* No price nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <Phone className="w-4 h-4 text-primary" />
          <p className="text-sm text-muted-foreground">
            Tarif personnalisé selon votre projet — contactez-nous pour un devis gratuit et sans engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 lg:p-7 bg-white border-2 ${plan.color} transition-all duration-300 ${
                plan.popular ? 'shadow-xl shadow-primary/10' : 'card-soft'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-slate-700 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{plan.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">{plan.pages}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-medium">⏱ {plan.delay}</span>
                </div>
              </div>

              <div className="space-y-2.5 mb-7">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    {f.ok
                      ? <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      : <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" />
                    }
                    <span className={`text-sm ${f.ok ? 'text-foreground/80' : 'text-muted-foreground/40'}`}>{f.text}</span>
                  </div>
                ))}
              </div>

              <a href="#contact">
                <button className={`w-full py-2.5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'border border-border hover:bg-secondary text-foreground'
                }`}>
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}