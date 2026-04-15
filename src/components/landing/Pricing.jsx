import React from 'react';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

export default function Pricing() {
  const allFeatures = [
    'Site vitrine responsive',
    'Design personnalisé',
    'Formulaire de contact',
    'Optimisation SEO de base',
    'Hébergement & nom de domaine inclus',
    'Référencement local Google Maps',
    'Blog intégré',
    'Suivi mensuel dédié',
    'Site vitrine premium responsive',
    'Design sur-mesure avancé',
    'Formulaire & prise de RDV en ligne',
    'SEO avancé (15 mots-clés ciblés)',
    'Référencement local & Google Maps',
    'Hébergement, domaine & SSL inclus',
    'Branding & identité visuelle',
    'Fonctionnalités avancées (e-shop, espace client…)',
    'SEO premium (30+ mots-clés)',
    'Référencement local multi-zones',
    'Hébergement premium + CDN + SSL',
    'Blog + stratégie de contenu',
    'Suivi mensuel dédié + reporting',
  ];

  return (
    <section id="tarifs" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50/70">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="section-label">Notre offre</span>
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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 lg:p-10 bg-white border-2 border-primary/30 shadow-xl shadow-primary/10"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap btn-primary">
              Solution complète et modulaire
            </div>

            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Offre sur-mesure</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
                Nous adaptons notre prestation à vos besoins réels : du site vitrine simple au projet e-commerce complet avec stratégie SEO avancée.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-sm font-medium text-blue-900">Abonnement maintenance optionnel : 50€/mois</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Hébergement, domaine, maintenance, support & modifications mineures inclus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {allFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="#contact">
                <button className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Réponse sous 24h · Devis détaillé · Sans engagement · Guide numérique fourni si pas d'abonnement
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
