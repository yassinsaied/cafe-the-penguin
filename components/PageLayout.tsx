import Image from 'next/image';
import { Phone, MapPin, Clock } from 'lucide-react';
import Header from './Header';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-espresso flex flex-col">
      <Header />

      {/* ── Page Banner ── */}
      <section className="relative h-52 md:h-72 overflow-hidden">
        <Image src="/hero.jpg" alt="" fill className="object-cover object-center" priority />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(18,13,7,0.88) 0%, rgba(18,13,7,0.50) 50%, rgba(18,13,7,0.88) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-brown/15" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {subtitle && (
            <p className="font-display italic text-gold-light text-lg tracking-[0.06em] mb-3">
              {subtitle}
            </p>
          )}
          <div className="flex items-center gap-4 mb-3">
            <span
              className="w-12 h-px hidden sm:block"
              style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }}
            />
            <h1
              className="font-heading font-bold text-white uppercase tracking-[0.14em]"
              style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
            >
              {title}
            </h1>
            <span
              className="w-12 h-px hidden sm:block"
              style={{ background: 'linear-gradient(to left, transparent, #C9A84C)' }}
            />
          </div>
          <div
            className="w-14 h-0.75 rounded"
            style={{ background: 'linear-gradient(to right, #3D1F00, #C9A84C, #3D1F00)' }}
          />
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer Bar ── */}
      <footer className="bg-[rgba(12,8,3,0.95)]">
        <div
          className="h-0.75"
          style={{
            background: 'linear-gradient(to right, #3D1F00, #C9A84C 30%, #C9A84C 70%, #3D1F00)',
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex items-center gap-5 px-6 md:px-10 py-6 border-b md:border-b-0 md:border-r border-gold/15">
            </div>
            <div>
              <p className="font-heading font-medium text-[15px] tracking-[0.08em] text-white mb-1">
                +92-0316-12345
              </p>
              <p className="font-body font-light text-xs text-muted leading-[1.6]">
                Lun – Dim : 8h00 – 21h00
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 px-6 md:px-10 py-6 border-b md:border-b-0 md:border-r border-gold/15">
            </div>
            <div>
              <p className="font-heading font-medium text-[15px] tracking-[0.08em] text-white mb-1">
                DHA 3, Commercial Area
              </p>
              <p className="font-body font-light text-xs text-muted leading-[1.6]">
                Opposite to Giga Mall, Islamabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 px-6 md:px-10 py-6">
            <div className="flex items-center justify-center shrink-0 w-13 h-13 rounded-full border-2 border-gold bg-gold/5">
              <Clock className="text-gold w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-medium text-[15px] tracking-[0.08em] text-white mb-1">
                OPEN EVERY DAY
              </p>
              <p className="font-body font-light text-xs text-muted leading-[1.6]">
                8:00am – 9:00pm
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
