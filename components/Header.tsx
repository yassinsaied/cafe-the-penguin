import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = ['HOME', 'SERVICES', 'QUI SOMME NOUS', 'CONTACT'] as const;

export default function Header() {
  return (
    <header className="flex items-center  px-10 py-2 border-b border-gold/20 bg-espresso/55 backdrop-blur-[6px]">
      {/* ── Logo ── */}
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-16 shrink-0 drop-shadow-[0_2px_8px_rgba(201,168,76,0.35)]">
          <Image
            src="/logo.png"
            alt="Cafe The Penguin logo"
            fill
            sizes="64px"
            className="object-contain"
            priority
          />
        </div>
        <div className="leading-none">
          <p className="font-heading font-bold text-2xl tracking-[0.22em] text-white">CAFE</p>
          <p className="font-body font-light text-[11px] tracking-[0.36em] text-gold mt-0.5">
            THE PENGUIN
          </p>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
        {NAV_ITEMS.map(item => (
          <Link
            key={item}
            href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className={`relative font-heading font-normal text-[16px] tracking-[0.14em] no-underline transition-colors duration-200 ${
              item === 'HOME' ? 'text-gold' : 'text-white hover:text-gold'
            }`}
          >
            {item}
            {item === 'HOME' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded" />
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
}
