import Image from 'next/image';
import Header from '@/components/Header';
import HeroContent from '@/components/HeroContent';
import InfoBar from '@/components/InfoBar';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-espresso">
      {/* Hero — full screen on desktop, natural height on mobile */}
      <div className="relative min-h-screen flex flex-col">
        {/* ── Background image + overlays ── */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Café The Penguin interior"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(18,13,7,0.80) 0%,
                rgba(18,13,7,0.30) 42%,
                rgba(18,13,7,0.70) 100%
              )`,
            }}
          />
          {/* Warm brown tint */}
          <div className="absolute inset-0 bg-brown/18" />
        </div>

        {/* ── Foreground content ── */}
        <div className="relative z-10 flex flex-col flex-1">
          <Header />
          <HeroContent />
          <InfoBar />
        </div>
      </div>
    </div>
  );
}
