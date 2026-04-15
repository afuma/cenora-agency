import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(214,89%,52%), hsl(262,70%,60%))' }}
        >
          {/* Animated dots */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="blob-1 absolute -left-16 -top-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
          <div className="blob-2 absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative px-8 py-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Prêt à attirer plus de clients ?
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8 text-sm">
              Réservez votre audit SEO gratuit et découvrez en 30 minutes comment développer votre activité en ligne.
            </p>
            <a href="#contact">
              <button className="bg-white text-primary font-bold px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                Réserver mon audit gratuit
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}