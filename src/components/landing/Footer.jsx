import React from 'react';
import { Zap } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Création de site internet', href: '#services' },
    { label: 'Refonte de site web', href: '#services' },
    { label: 'Référencement SEO', href: '#services' },
    { label: 'SEO local & Google Maps', href: '#services' },
    { label: 'Branding', href: '#services' },
  ],
  nav: [
    { label: 'Nos réalisations', href: '#portfolio' },
    { label: 'Notre méthode', href: '#methode' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'CGV', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" style={{color:'hsl(214,89%,70%)'}} />
              </div>
              <span className="text-lg font-bold text-white">Cenora</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Agence digitale spécialisée en création de sites web et référencement local pour indépendants, TPE et PME.
            </p>
            <div className="mt-4 text-sm text-white/50">
              <p>📍 Paris, France</p>
              <p>📞 01 23 45 67 89</p>
              <p>✉️ contact@Cenora.fr</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.nav.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Cenora. Tous droits réservés.</p>
          <p className="text-xs text-white/40">Fait avec ❤️ en France</p>
        </div>
      </div>
    </footer>
  );
}