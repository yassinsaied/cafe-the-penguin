import Link from 'next/link';

export default function HeroContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-10 pb-8 md:pt-12.5 md:pb-45">
      {/* ── Decorative rule ── */}
      <div className="flex items-center gap-3.5 mb-5">
        <span
          className="w-12.5 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }}
        />
        <span className="font-display italic font-normal text-[32px] text-gold-light tracking-widest">
          BIENVENUE
        </span>
        <span
          className="w-12.5 h-px"
          style={{ background: 'linear-gradient(to left, transparent, #C9A84C)' }}
        />
      </div>

      {/* ── Main title ── */}
      <h1
        className="font-heading font-bold text-white uppercase tracking-wider leading-[1.18] max-w-205 mb-5"
        style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
      >
        RÉPARATION & ENTRETIEN
        <br />
        DES MACHINES À CAFÉ
      </h1>

      {/* ── Gold separator ── */}
      <div
        className="w-15 h-0.75 rounded mb-3"
        style={{ background: 'linear-gradient(to right, #3D1F00, #C9A84C, #3D1F00)' }}
      />

      {/* ── Description ── */}
      <p className="font-body font-normal text-[15px] text-gold-light tracking-[0.04em] max-w-125 mb-12 leading-[1.85]">
        Spécialiste en réparation, maintenance et vente de machines à café pour professionnels et
        particuliers. Pro Café Service vous accompagne avec un service rapide, fiable et une
        expertise de qualité.
      </p>

      {/* ── CTA Buttons ── */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Services — filled gold */}
        <Link
          href="/services"
          className="font-heading font-medium text-sm tracking-[0.20em] uppercase text-espresso px-10 py-3.75 cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-px inline-block"
          style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #A8832E 100%)',
            boxShadow: '0 4px 20px rgba(201,168,76,0.40)',
          }}
        >
          Nos Services
        </Link>

        {/* Contact — gold outline */}
        <Link
          href="/contact"
          className="font-heading font-medium text-sm tracking-[0.20em] uppercase text-gold-light border-2 border-gold bg-transparent px-9.5 py-3.25 cursor-pointer transition-all duration-200 hover:bg-gold hover:text-espresso hover:-translate-y-px inline-block"
        >
          Nous Contacter
        </Link>
      </div>
    </div>
  );
}
