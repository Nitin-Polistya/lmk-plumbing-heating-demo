import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gasgenics Heating & Plumbing | Wakefield Heating & Boiler Specialist',
  description: 'Owner-led boiler repairs, fault diagnostics, servicing & installations in Wakefield by Darren Gubby. Fast, honest, reliable. Call 07770 683797.',
  keywords: 'Gasgenics Heating & Plumbing, Darren Gubby, boiler repair Wakefield, heating engineer Wakefield, Gas Safe engineer, Ideal Max installer, emergency plumber Wakefield',
  authors: [{ name: 'Darren Gubby' }],
  openGraph: {
    title: 'Gasgenics Heating & Plumbing — Local Wakefield Heating Experts',
    description: 'Heating problems diagnosed properly, first time. Owner-led boiler repairs, servicing & installations.',
    url: 'https://gasgenics.co.uk',
    siteName: 'Gasgenics Heating & Plumbing',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-[#F7FAFD] text-[#121A24] antialiased selection:bg-[#1666D9] selection:text-white">
        {children}
      </body>
    </html>
  );
}
