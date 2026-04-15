import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Marie Dupont',
    company: 'Salon Éclat',
    role: 'Gérante',
    text: "En 2 mois, mon salon est passé en première position sur Google Maps. Je reçois maintenant 3 à 4 nouveaux clients par semaine grâce au site. Je recommande les yeux fermés !",
    rating: 5,
    color: 'bg-blue-50',
    accent: 'text-blue-500',
  },
  {
    name: 'Thomas Martin',
    company: 'Plomberie Express',
    role: 'Artisan plombier',
    text: "Mon site a été livré en 2 semaines chrono, exactement comme promis. Les demandes de devis ont triplé en un mois. Équipe très à l'écoute et pro. Merci !",
    rating: 5,
    color: 'bg-violet-50',
    accent: 'text-violet-500',
  },
  {
    name: 'Sophie Bernard',
    company: 'Les Gîtes du Moulin',
    role: 'Propriétaire',
    text: "Nous avions besoin d'un site pour nos gîtes avec un vrai référencement local. Résultat : +180% de réservations en ligne. Un investissement qui se rentabilise très vite.",
    rating: 5,
    color: 'bg-indigo-50',
    accent: 'text-indigo-500',
  },
];

export default function SocialProof() {
  return (
    <section id="temoignages" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Side decorations */}
      <div className="blob-1 absolute -left-20 top-1/2 w-64 h-64 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="blob-2 absolute -right-20 top-1/3 w-64 h-64 rounded-full bg-violet-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Témoignages</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Ce que disent nos <span className="gradient-text">clients</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-soft rounded-2xl p-6 flex flex-col"
            >
              <Quote className={`w-8 h-8 mb-4 ${r.accent} opacity-30`} />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{r.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array(r.rating).fill(0).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className={`flex items-center gap-3 pt-4 border-t border-border`}>
                <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-semibold ${r.accent} text-sm flex-shrink-0`}>
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role} · {r.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}