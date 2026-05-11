import { Coffee, Wrench, Truck } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const SERVICES = [
  {
    icon: <Coffee className="w-8 h-8 text-gold" />,
    subtitle: 'Machines & Café',
    title: 'VENTE DE CAFÉ & MACHINES',
    description:
      'Nous proposons une sélection de machines à café professionnelles et domestiques ainsi que des cafés de qualité pour particuliers et entreprises.',
    items: [
      'Machines à espresso professionnelles',
      'Machines à café automatiques',
      'Café en grains & moulu',
      'Accessoires barista',
    ],
  },
  {
    icon: <Wrench className="w-8 h-8 text-gold" />,
    subtitle: 'Maintenance & Réparation',
    title: 'ENTRETIEN & SAV',
    description:
      'Service complet de maintenance, dépannage et réparation de machines à café pour garantir performance et longévité.',
    items: [
      'Maintenance préventive',
      'Réparation de machines',
      'Détartrage & nettoyage',
      'Service après-vente rapide',
    ],
  },
  {
    icon: <Truck className="w-8 h-8 text-gold" />,
    subtitle: 'Professionnels & Particuliers',
    title: 'INSTALLATION & LIVRAISON',
    description:
      'Installation de machines et livraison de café pour bureaux, restaurants et particuliers avec accompagnement personnalisé.',
    items: [
      'Installation sur site',
      'Livraison de café',
      'Formation à l’utilisation',
      'Contrats pour entreprises',
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageLayout title="NOS SERVICES" subtitle="What We Offer">
      <section className="px-6 py-16 max-w-6xl mx-auto w-full">
        {/* Intro */}
        <div className="text-center mb-14">
          <p className="font-body font-normal text-[15px] text-gold-light tracking-[0.04em] leading-[1.85] max-w-145 mx-auto">
            Pro Café Service vous propose une gamme complète de solutions pour vos machines à café :
            réparation, maintenance, vente et installation. Service rapide, expertise reconnue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(service => (
            <div
              key={service.title}
              className="group relative border border-gold/15 bg-brown/10 p-8 transition-all duration-300 hover:border-gold/40 hover:bg-brown/20 overflow-hidden"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold/35 bg-gold/5 mb-6 group-hover:border-gold/70 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Subtitle */}
              <p className="font-display italic text-gold text-sm mb-1">{service.subtitle}</p>

              {/* Title */}
              <h2 className="font-heading font-bold text-white text-xl tracking-widest mb-4">
                {service.title}
              </h2>

              {/* Separator */}
              <div
                className="h-0.5 mb-5 transition-all duration-500 group-hover:opacity-60"
                style={{
                  width: '40px',
                  background: 'linear-gradient(to right, #3D1F00, #C9A84C, #3D1F00)',
                }}
              />

              {/* Description */}
              <p className="font-body font-normal text-[15px] text-gold-light tracking-[0.04em] leading-[1.85] mb-6">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2.5">
                {service.items.map(item => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-xs text-cream/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="font-body font-light text-muted text-sm mb-6">
            Votre machine a besoin d&apos;une réparation ou d&apos;un entretien ? Contactez-nous
            pour un devis gratuit.
          </p>
          <a
            href="/contact"
            className="inline-block font-heading font-medium text-sm tracking-[0.20em] uppercase text-espresso px-10 py-3.75 transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #A8832E 100%)',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
