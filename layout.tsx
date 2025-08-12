import './globals.css';
import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['100', '400', '700', '800'],
});

export const metadata = {
  title: 'Graphic Design | Mini Digital Media',
  description: 'Creative Graphic Design Services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${barlow.className} bg-[#161616] text-white`}>
        <main className="min-h-screen px-8 py-20 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}