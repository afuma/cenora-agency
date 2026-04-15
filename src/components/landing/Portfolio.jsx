import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Le Bistrot des Halles',
    category: 'Restaurant',
    tag: 'Site vitrine + SEO local',
    description: 'Site moderne avec menu en ligne, réservation et fiche Google Maps optimisée. +220% de réservations en 3 mois.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    color: 'bg-orange-50',
    tagColor: 'text-orange-600 bg-orange-100',
    results: ['+220% de réservations', 'Top 1 Google Maps'],
  },
  {
    id: 2,
    title: 'Les Gîtes du Moulin',
    category: 'Hébergement',
    tag: 'Site + Réservation en ligne',
    description: 'Plateforme de réservation pour 4 gîtes ruraux avec galerie, disponibilités et SEO tourisme local.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    color: 'bg-green-50',
    tagColor: 'text-green-700 bg-green-100',
    results: ['+180% de réservations', 'Page 1 sur 12 mots-clés'],
  },
  {
    id: 3,
    title: 'Métal Industrie Pro',
    category: 'Industrie',
    tag: 'Site corporate + SEO B2B',
    description: 'Présence digitale pour un sous-traitant industriel : catalogue produits, demandes de devis, référencement sectoriel.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    color: 'bg-slate-50',
    tagColor: 'text-slate-700 bg-slate-200',
    results: ['+85% de leads B2B', 'Top 3 sur secteur'],
  },
  {
    id: 4,
    title: 'Dupont Plomberie',
    category: 'Artisanat',
    tag: 'Site vitrine + SEO local',
    description: "Site de plombier avec zone d'intervention, urgences, formulaire de devis et optimisation Google Maps complète.",
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80',
    color: 'bg-blue-50',
    tagColor: 'text-blue-700 bg-blue-100',
    results: ['x4 appels entrants', 'Top 1 sur sa ville'],
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Side blobs */}
      <div className="blob-1 absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="blob-2 absolute -right-24 bottom-1/4 w-72 h-72 rounded-full bg-violet-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Nos réalisations</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Des sites qui <span className="gradient-text">performent</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            De l'artisan au groupe industriel, voici quelques projets concrets et leurs résultats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="card-soft rounded-2xl overflow-hidden bg-white group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">{p.title}</h3>
                    <span className="text-xs text-muted-foreground">{p.category}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>

                {/* Results */}
                <div className="flex flex-wrap gap-2">
                  {p.results.map((r, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary font-medium" style={{background:'rgba(37,99,235,0.08)'}}>
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact">
            <button className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold">
              Discuter de votre projet
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}