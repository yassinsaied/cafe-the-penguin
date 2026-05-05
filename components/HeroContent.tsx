export default function HeroContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-[50px] pb-[180px]">
      {/* ── Decorative rule ── */}
      <div className="flex items-center gap-3.5 mb-5">
        <span
          className="w-[50px] h-px"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }}
        />
        <span className="font-display italic font-normal text-[32px] text-gold-light tracking-[0.10em]">
          Welcome
        </span>
        <span
          className="w-[50px] h-px"
          style={{ background: 'linear-gradient(to left, transparent, #C9A84C)' }}
        />
      </div>

      {/* ── Main title ── */}
      <h1
        className="font-heading font-bold text-white uppercase tracking-[0.05em] leading-[1.18] max-w-[820px] mb-5"
        style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
      >
        THE BEST COFFEE TESTING
        <br />
        EXPERIENCE IN PAKISTAN
      </h1>

      {/* ── Gold separator ── */}
      <div
        className="w-[60px] h-[3px] rounded mb-5"
        style={{ background: 'linear-gradient(to right, #3D1F00, #C9A84C, #3D1F00)' }}
      />

      {/* ── Description ── */}
      <p className="font-body font-light text-[15px] text-cream tracking-[0.04em] max-w-[500px] mb-12 leading-[1.7]">
        A small river named Duden flows by their place and supplies it with the necessary
        regelialia.
      </p>

      {/* ── CTA Buttons ── */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Order Now — filled gold */}
        <button
          className="font-heading font-medium text-sm tracking-[0.20em] uppercase text-espresso px-10 py-[15px] cursor-pointer transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
          style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #A8832E 100%)',
            boxShadow: '0 4px 20px rgba(201,168,76,0.40)',
          }}
        >
          Order Now
        </button>

        {/* View Menu — gold outline */}
        <button className="font-heading font-medium text-sm tracking-[0.20em] uppercase text-gold-light border-2 border-gold bg-transparent px-[38px] py-[13px] cursor-pointer transition-all duration-200 hover:bg-gold hover:text-espresso hover:-translate-y-px">
          View Menu
        </button>
      </div>
    </div>
  );
}
