import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Jessica Bruehl',
  description: 'Portfolio of Jessica Bruehl, a designer specializing in typography, typeface design, and custom lettering. Explore her work and projects in the world of type design.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#0a0a0a] text-[#f5f5f5] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
