import React from 'react';
import { Heart, MapPin, Package, Clock, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  {
    icon: Heart,
    title: 'Humain et disponible',
    description: 'Un interlocuteur dédié, joignable par téléphone ou email. Pas de ticket support, une vraie relation.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: MapPin,
    title: 'Expert du local',
    description: 'Spécialistes du SEO local, nous savons positionner votre activité sur votre zone géographique.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Package,
    title: 'Solution clé en main',
    description: 'Du design au référencement, on gère tout. Vous n\'avez qu\'à valider et développer votre activité.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Clock,
    title: 'Rapide & ponctuel',
    description: 'Site livré en 2 à 3 semaines. Planning respecté, jalons communiqués. Votre temps est précieux.',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    icon: Zap,
    title: 'Performances techniques',
    description: 'Sites ultra-rapides, 100% responsive, optimisés Core Web Vitals. Google adore, vos clients aussi.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Shield,
    title: 'Vous êtes propriétaire',
    description: 'Votre site vous appartient à 100%. Hébergement, code, contenu — tout vous est remis à la fin.',
    color: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
];

export default function Advantages() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="blob-3 absolute -left-20 bottom-10 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="blob-1 absolute -right-16 top-16 w-64 h-64 rounded-full bg-violet-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Pourquoi nous</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Ce qui nous <span className="gradient-text">différencie</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft rounded-2xl p-5 bg-white flex items-start gap-4"
            >
              <div className={`w-10 h-10 rounded-xl ${a.color} flex items-center justify-center flex-shrink-0`}>
                <a.icon className={`w-5 h-5 ${a.iconColor}`} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}