import type { Metadata } from 'next';
import { Oswald, Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Pro Café Service',
  description: 'Pro Café Service – Coffee expertise, catering & événements à Islamabad.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable} ${playfairDisplay.variable}`}>
      <body className="bg-espresso">{children}</body>
    </html>
  );
}
