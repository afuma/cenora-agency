import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import AnimatedBackground from './AnimatedBackground';

const serviceOptions = [
  { value: 'site_creation', label: 'Création de site internet' },
  { value: 'site_redesign', label: 'Refonte de site web' },
  { value: 'seo', label: 'Référencement naturel (SEO)' },
  { value: 'local_seo', label: 'Référencement local' },
  { value: 'branding', label: 'Branding / identité visuelle' },
  { value: 'other', label: 'Autre / Je ne sais pas encore' },
];

const infos = [
  { icon: Phone, label: 'Téléphone Lisieux', value: '06 04 01 43 63', sub: 'Lun-Ven, 9h-18h' },
  { icon: Phone, label: 'Téléphone Carcassonne', value: '07 80 43 98 22', sub: 'Lun-Ven, 9h-18h' },
  { icon: Mail, label: 'Email', value: 'contact@cenora.fr', sub: 'Réponse sous 24h' },
  { icon: Clock, label: 'Audit gratuit', value: 'Sans engagement', sub: '30 minutes suffisent' },
];

export default function Contact() {
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', company: '', service: '', message: '', request_type: 'audit'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Log form data to console (you can replace this with your own API call)
      console.log('Form submitted:', form);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      toast.success("Demande envoyée ! On vous recontacte dans les 24h.");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-slate-50/70">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-soft bg-white rounded-2xl p-12"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-5" />
            <h3 className="text-2xl font-bold text-foreground mb-3">C'est parti !</h3>
            <p className="text-muted-foreground text-sm">
              On a bien reçu votre demande. Notre équipe vous contactera dans les 24h pour planifier votre audit gratuit.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50/70">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label">Contact</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
          >
            Parlons de votre <span className="gradient-text">projet</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Audit gratuit · Devis personnalisé · Sans engagement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-4">
            {infos.map((info, i) => (
              <div key={i} className="card-soft bg-white rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">{info.label}</div>
                  <div className="font-semibold text-foreground text-sm">{info.value}</div>
                  <div className="text-xs text-muted-foreground">{info.sub}</div>
                </div>
              </div>
            ))}
            <div className="card-soft bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-5">
              <p className="text-sm font-medium text-foreground mb-1">🎯 Audit SEO offert</p>
              <p className="text-xs text-muted-foreground">Analyse complète de votre présence Google, recommandations personnalisées et plan d'action — gratuitement.</p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 card-soft bg-white rounded-2xl p-6 lg:p-8 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Nom complet *</label>
                <Input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} placeholder="Jean Dupont" className="bg-slate-50 border-border" />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Email *</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jean@exemple.fr" className="bg-slate-50 border-border" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Téléphone</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="06 12 34 56 78" className="bg-slate-50 border-border" />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Entreprise</label>
                <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Mon entreprise" className="bg-slate-50 border-border" />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Service souhaité</label>
              <Select value={form.service} onValueChange={(val) => setForm({ ...form, service: val })}>
                <SelectTrigger className="bg-slate-50 border-border">
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Votre message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Décrivez votre projet ou vos besoins en quelques mots..." rows={4} className="bg-slate-50 border-border" />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full py-3 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2">
              {loading ? 'Envoi en cours...' : 'Envoyer ma demande d\'audit gratuit'}
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-muted-foreground text-center">Réponse garantie sous 24h · Aucun engagement · 100% confidentiel</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}