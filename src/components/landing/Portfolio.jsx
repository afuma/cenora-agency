import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Target, Wrench, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Le Bistrot des Halles',
    category: 'Restauration · Projet de démonstration',
    tag: 'Site vitrine + SEO local',
    description: 'Objectif : Rendre un restaurant visible sur Google et faciliter les réservations en ligne.',
    details: 'Site responsive avec menu interactif, prise de réservation et fiche Google Business optimisée.',
    demonstration: 'Maîtrise du SEO local et de la conversion.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    color: 'bg-orange-50',
    tagColor: 'text-orange-600 bg-orange-100',
    results: ['SEO local ciblé', 'Réservation en ligne', 'Google Maps optimisé'],
    url: 'https://afuma.github.io/demo-restaurant/'
  },
  {
    id: 2,
    title: 'Les Gîtes du Moulin',
    category: 'Hébergement rural · Projet de démonstration',
    tag: 'Site + Réservation en ligne',
    description: 'Objectif : Digitaliser une offre d\'hébergement rural pour attirer des vacanciers via Google.',
    details: 'Plateforme de réservation avec galerie, disponibilités et stratégie SEO tourisme.',
    demonstration: 'Capacité à créer des sites générateurs de réservations.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    color: 'bg-green-50',
    tagColor: 'text-green-700 bg-green-100',
    results: ['Système de réservation', 'SEO tourisme local', 'Stratégie mots-clés'],
    url: 'https://afuma.github.io/demo-gites/
  },
  {
    id: 3,
    title: 'Métal Industrie Pro',
    category: 'Sous-traitance B2B · Projet de démonstration',
    tag: 'Site corporate + SEO B2B',
    description: 'Objectif : Crédibiliser une PME industrielle auprès de donneurs d\'ordres et générer des devis qualifiés.',
    details: 'Site corporate avec catalogue produits et formulaire de contact métier.',
    demonstration: 'Approche SEO sectoriel B2B et positionnement premium.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    color: 'bg-slate-50',
    tagColor: 'text-slate-700 bg-slate-200',
    results: ['Design corporate premium', 'SEO sectoriel B2B', 'Formulaire devis intégré'],
    url: 'https://afuma.github.io/demo-metal/
  },
  {
    id: 4,
    title: 'Dupont Plomberie',
    category: 'Artisan local · Projet de démonstration',
    tag: 'Site vitrine + SEO local',
    description: 'Objectif : Faire apparaître un plombier en tête des recherches locales et transformer les visites en appels.',
    details: 'Site vitrine avec zone d\'intervention, urgences 24h/24 et optimisation Google Maps complète.',
    demonstration: 'Expertise SEO pour artisans et métiers de proximité.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80',
    color: 'bg-blue-50',
    tagColor: 'text-blue-700 bg-blue-100',
    results: ['Visibilité Google Maps', 'Appels directs optimisés', 'Zone d\'intervention ciblée'],
    url: 'https://afuma.github.io/demo-plombier/
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
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className="card-soft rounded-2xl overflow-hidden bg-white group cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className="card-soft rounded-2xl overflow-hidden bg-white group"
              </motion.div>
            </a>
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
                {/* Title and category on image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg mb-1">{p.title}</h3>
                  <span className="text-xs text-white/90 italic">{p.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Objectif */}
                <div className="flex items-start gap-2 mb-3">
                  <Target className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase mb-1">Objectif</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description.replace('Objectif : ', '')}</p>
                  </div>
                </div>

                {/* Réalisation */}
                <div className="flex items-start gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-purple-600 uppercase mb-1">Réalisation</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.details}</p>
                  </div>
                </div>

                {/* Ce que ça démontre */}
                <div className="flex items-start gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-green-600 uppercase mb-1">Ce que ça démontre</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.demonstration}</p>
                  </div>
                </div>

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
