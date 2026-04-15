import React from 'react';
import { Globe, RefreshCw, Search, MapPin, Palette, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const services = [
  {
    icon: Globe,
    title: 'Création de site internet',
    description: 'Sites vitrines, landing pages sur-mesure : design unique, mobile-first, rapide. Conçu pour convaincre et convertir.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: RefreshCw,
    title: 'Refonte de site web',
    description: 'Votre site existant mérite mieux. Modernisation du design, optimisation UX et boost des performances.',
    color: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    icon: Search,
    title: 'Référencement naturel (SEO)',
    description: 'Stratégie SEO complète : audit, mots-clés, contenus et technique. Première page Google, durablement.',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
  },
  {
    icon: MapPin,
    title: 'SEO local & Google Maps',
    description: 'Dominez les recherches dans votre zone. Fiche Google Business, avis, citations locales — clé en main.',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Palette,
    title: 'Branding & identité visuelle',
    description: 'Logo, charte graphique, univers visuel cohérent. Une image professionnelle qui inspire confiance.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50/70">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Nos services</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Des solutions <span className="gradient-text">sur-mesure</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Chaque prestation est pensée pour votre secteur et vos objectifs de croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-soft rounded-2xl p-6 bg-white group"
            >
              <div className={`w-11 h-11 rounded-xl ${s.color} flex items-center justify-center mb-5`}>
                <s.icon className={`w-5 h-5 ${s.iconColor}`} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.description}</p>
              <a href="#contact" className={`inline-flex items-center gap-1.5 text-sm font-semibold ${s.iconColor} hover:gap-2.5 transition-all`}>
                En savoir plus <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}