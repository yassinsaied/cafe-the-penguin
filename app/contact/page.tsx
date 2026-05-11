import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const CONTACT_ITEMS = [
  {
    icon: <Phone className="w-5 h-5 text-gold" />,
    title: '+92-0316-12345',
    sub: 'Lun – Dim : 8h00 – 21h00',
  },
  {
    icon: <Mail className="w-5 h-5 text-gold" />,
    title: 'hello@procafeservice.com',
    sub: 'Réponse sous 24h',
  },
  {
    icon: <MapPin className="w-5 h-5 text-gold" />,
    title: 'DHA 3, Commercial Area',
    sub: 'Opposite to Giga Mall, Islamabad',
  },
  {
    icon: <Clock className="w-5 h-5 text-gold" />,
    title: 'OPEN EVERY DAY',
    sub: '8:00am – 9:00pm',
  },
];

export default function ContactPage() {
  return (
    <PageLayout title="CONTACT" subtitle="Nous Rejoindre">
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Left: Info ── */}
          <div>
            <p className="font-display italic text-gold text-lg tracking-[0.04em] mb-2">
              Vous avez des questions&nbsp;?
            </p>
            <h2
              className="font-heading font-bold text-white uppercase tracking-[0.06em] mb-3"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}
            >
              Parlons avec nous
            </h2>
            <div
              className="w-12 h-0.75 rounded mb-6"
              style={{ background: 'linear-gradient(to right, #3D1F00, #C9A84C, #3D1F00)' }}
            />
            <p className="font-body font-normal text-[15px] text-gold-light tracking-[0.04em] leading-[1.85] mb-10">
              Vous avez une machine à café à réparer, entretenir ou vous cherchez un modèle
              professionnel ? Pro Café Service est à votre écoute pour vous accompagner.
            </p>

            <div className="space-y-6">
              {CONTACT_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full border-2 border-gold/40 bg-gold/5">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <p className="font-heading font-medium text-white text-sm tracking-[0.08em] mb-0.5">
                      {item.title}
                    </p>
                    <p className="font-body font-light text-muted text-xs leading-[1.65]">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="border border-gold/15 bg-brown/10 p-8 md:p-10">
            <h3 className="font-heading font-bold text-white text-xl tracking-widest mb-1">
              ENVOYER UN MESSAGE
            </h3>
            <div
              className="w-10 h-0.5 mb-7"
              style={{ background: 'linear-gradient(to right, #3D1F00, #C9A84C, #3D1F00)' }}
            />

            <form className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-heading text-[11px] tracking-[0.14em] text-gold mb-2 block">
                    NOM
                  </label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom"
                    autoComplete="family-name"
                    className="w-full bg-espresso/60 border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold/55 placeholder:text-muted/45 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="font-heading text-[11px] tracking-[0.14em] text-gold mb-2 block">
                    PRÉNOM
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    placeholder="Votre prénom"
                    autoComplete="given-name"
                    className="w-full bg-espresso/60 border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold/55 placeholder:text-muted/45 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-heading text-[11px] tracking-[0.14em] text-gold mb-2 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  autoComplete="email"
                  className="w-full bg-espresso/60 border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold/55 placeholder:text-muted/45 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="font-heading text-[11px] tracking-[0.14em] text-gold mb-2 block">
                  SUJET
                </label>
                <input
                  type="text"
                  name="sujet"
                  placeholder="Objet de votre message"
                  className="w-full bg-espresso/60 border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold/55 placeholder:text-muted/45 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="font-heading text-[11px] tracking-[0.14em] text-gold mb-2 block">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full bg-espresso/60 border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold/55 placeholder:text-muted/45 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full font-heading font-medium text-sm tracking-[0.20em] uppercase text-espresso px-10 py-3.75 cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #A8832E 100%)',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.30)',
                }}
              >
                ENVOYER
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
