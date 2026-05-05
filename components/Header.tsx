'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['HOME', 'SERVICES', 'QUI SOMME NOUS', 'CONTACT'] as const;

function navHref(item: string) {
  return item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 md:px-10 py-2 border-b border-gold/20 bg-espresso/55 backdrop-blur-[6px]">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(201,168,76,0.35)]">
            <Image
              src="/logo.png"
              alt="Cafe The Penguin logo"
              fill
              sizes="(max-width: 768px) 56px, 64px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-none">
            <p className="font-heading font-bold text-xl md:text-2xl tracking-[0.22em] text-white">CAFE</p>
            <p className="font-body font-light text-[10px] md:text-[11px] tracking-[0.36em] text-gold mt-0.5">
              THE PENGUIN
            </p>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {NAV_ITEMS.map(item => {
            const href = navHref(item);
            const active = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={`relative font-heading font-normal text-[15px] tracking-[0.14em] no-underline transition-colors duration-200 ${
                  active ? 'text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {item}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Hamburger button (mobile) ── */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-gold border border-gold/30 rounded"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-espresso/90 backdrop-blur-[10px]"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <nav className="relative z-10 mt-18 flex flex-col items-center gap-0 border-t border-gold/20 bg-espresso/95">
            {NAV_ITEMS.map((item, i) => {
              const href = navHref(item);
              const active = pathname === href;
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`w-full text-center font-heading font-normal text-[15px] tracking-[0.18em] uppercase py-5 border-b border-gold/10 transition-colors duration-200 ${
                    active ? 'text-gold bg-gold/5' : 'text-white hover:text-gold hover:bg-gold/5'
                  } ${i === 0 ? '' : ''}`}
                >
                  {item}
                  {active && (
                    <span className="block mx-auto mt-1.5 w-6 h-0.5 bg-gold rounded" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

