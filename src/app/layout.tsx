import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import { Footer, Header } from '@/src/widgets';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://usta-kg.netlify.app'),
  title: {
    default: 'Usta - Профессиональные сантехнические услуги в Бишкеке',
    template: '%s | Usta',
  },
  description:
    'Профессиональные сантехнические услуги в Бишкеке. Быстрый выезд, опытные мастера, гарантия качества.',
  applicationName: 'Usta',
  authors: [{ name: 'Usta' }],
  generator: 'Next.js',
  keywords: [
    'сантехник Бишкек',
    'сантехнические услуги',
    'вызов сантехника',
    'ремонт сантехники',
    'установка сантехники',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Usta',
  publisher: 'Usta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Usta',
  },
  verification: {
    google: 'dHkib6Q9s-t9gQuBQTMQFupvQlBTIqcjVxFdXbl_fn0',
    yandex: 'your-yandex-verification-code',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Usta',
  description: 'Профессиональные сантехнические услуги в Бишкеке',
  telephone: '+996501622656',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Бишкек',
    addressCountry: 'KG',
  },
  areaServed: {
    '@type': 'City',
    name: 'Бишкек',
  },
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-24:00',
  image: '/logo.png',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '1000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={montserrat.className}>
        <Header />
        <div className='pt-[74px]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
