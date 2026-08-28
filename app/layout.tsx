import type { Metadata } from 'next';
import { Barlow_Condensed, Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LMK Plumbing & Heating Services | Wakefield',
  description: 'Local plumbing and heating services around Wakefield including boilers, radiators, plumbing repairs, bathrooms, hot-water systems and heating-system work.',
  keywords: 'LMK Plumbing & Heating Services, Lee Kovacs, plumber Wakefield, boiler repair Wrenthorpe, heating engineer Wakefield, bathroom plumbing Wakefield, Ossett plumber, Horbury plumber',
  authors: [{ name: 'Lee Kovacs' }],
  openGraph: {
    title: 'LMK Plumbing & Heating Services | Wakefield',
    description: 'From the small fixes to the full system. Local plumbing and heating services around Wakefield.',
    siteName: 'LMK Plumbing & Heating Services',
    locale: 'en_GB',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'LMK Plumbing & Heating Services',
  image: '/images/lmk-original-logo.png',
  telephone: '+447805329803',
  email: 'lmkheating@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wrenthorpe',
    addressRegion: 'Wakefield',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Wrenthorpe' },
    { '@type': 'AdministrativeArea', name: 'Wakefield' },
    { '@type': 'AdministrativeArea', name: 'Ossett' },
    { '@type': 'AdministrativeArea', name: 'Horbury' },
  ],
  priceRange: '££',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${barlowCondensed.variable} ${manrope.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FCFCFD] text-[#0F1720] antialiased selection:bg-[#E317A8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
