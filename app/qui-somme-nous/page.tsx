import { Award, Heart, Leaf } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const VALUES = [
  {
    icon: <Award className="w-7 h-7 text-gold" />,
    title: 'QUALITÉ',
    desc: "Nous n'acceptons rien de moins que l'excellence. Des grains de café aux pâtisseries maison, chaque détail est pensé avec soin.",
  },
  {
    icon: <Heart className="w-7 h-7 text-gold" />,
    title: 'PASSION',
    desc: "Le café est notre art. Chaque tasse est préparée avec l'enthousiasme de ceux qui aiment profondément ce qu'ils font.",
  },
  {
    icon: <Leaf className="w-7 h-7 text-gold" />,
    title: 'DURABILITÉ',
    desc: 'Nous nous engageons à sourcer éthiquement et à réduire notre empreinte environnementale à chaque étape de notre processus.',
  },
];

const STATS = [
  { num: '2019', label: 'Fondé' },
  { num: '50+', label: 'Variétés de café' },
  { num: '200+', label: 'Clients / jour' },
  { num: '15+', label: "Membres d'équipe" },
];

export default function QuiSommesNousPage() {
  return (
    <PageLayout title="QUI SOMMES NOUS" subtitle="Notre Histoire">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* ── Story ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display italic text-gold text-lg tracking-[0.04em] mb-3">
              Notre Histoire
            </p>
            <h2
              className="font-heading font-bold text-white uppercase tracking-[0.06em] leading-[1.2] mb-5"
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
            >
              Une passion née
              <br />
              du café
            </h2>
            <div
              className="w-12 h-0.75 rounded mb-6"
            style={{ background: 'linear-gradient(to right, #1e3a6e, #C9A84C, #1e3a6e)' }}
            />
            <p className="font-body font-light text-cream text-[15px] leading-[1.85] mb-4">
              Fondé en 2019 au cœur d&apos;Islamabad, Café The Penguin est né d&apos;une vision
              simple&nbsp;: offrir bien plus qu&apos;une simple tasse de café. Nous croyons en
              l&apos;art du café comme vecteur de convivialité, de culture et de confort.
            </p>
            <p className="font-body font-light text-muted text-sm leading-[1.85]">
              Notre équipe de baristas passionnés sélectionne soigneusement chaque grain, prépare
              chaque tasse avec précision, et accueille chaque client comme un ami de longue date.
            </p>
          </div>

          {/* Quote panel */}
          <div className="relative h-75 border border-gold/20 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-brown/40 to-espresso" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
              <p className="font-display italic text-gold/60 text-7xl leading-none mb-2">&ldquo;</p>
              <p className="font-display italic text-cream text-[17px] leading-[1.75] mb-5">
                Le café n&apos;est pas seulement une boisson, c&apos;est un moment de partage, une
                expérience à vivre.
              </p>
              <div className="w-8 h-0.5 bg-gold mx-auto mb-3" />
              <p className="font-heading text-gold text-[11px] tracking-[0.20em] uppercase">
                — Fondateur, Café The Penguin
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-t border-b border-gold/15 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(stat => (
            <div key={stat.label}>
              <p
                className="font-heading font-bold text-gold tracking-[0.04em] mb-1"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                {stat.num}
              </p>
              <p className="font-body font-light text-muted text-[11px] tracking-[0.14em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* ── Values ── */}
        <section className="text-center">
          <p className="font-display italic text-gold text-lg tracking-[0.04em] mb-2">
            Ce qui nous définit
          </p>
          <h2
            className="font-heading font-bold text-white uppercase tracking-[0.08em] mb-3"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
          >
            NOS VALEURS
          </h2>
          <div
            className="w-12 h-0.75 rounded mx-auto mb-12"
            style={{ background: 'linear-gradient(to right, #1e3a6e, #C9A84C, #1e3a6e)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(v => (
              <div
                key={v.title}
                className="border border-gold/15 bg-brown/10 p-8 hover:border-gold/35 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gold/40 bg-gold/5 mx-auto mb-5 hover:border-gold transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-lg tracking-[0.12em] mb-3">
                  {v.title}
                </h3>
                <div className="w-8 h-0.5 bg-gold/40 mx-auto mb-4" />
                <p className="font-body font-light text-muted text-sm leading-[1.75]">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center pb-4">
          <p className="font-body font-light text-muted text-sm mb-6">
            Venez nous rencontrer et découvrir notre univers autour d&apos;un café.
          </p>
          <a
            href="/contact"
            className="inline-block font-heading font-medium text-sm tracking-[0.20em] uppercase text-espresso px-10 py-3.75 transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #A8832E 100%)',
              boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
            }}
          >
            Nous Rendre Visite
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
