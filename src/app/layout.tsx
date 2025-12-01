import './globals.css';
import { Montserrat } from 'next/font/google';
import { Footer, Header } from '@/src/widgets';

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Usta',
  description: 'Профессиональные сантехнические услуги в Бишкеке',
  telephone: '+996504454408',
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
