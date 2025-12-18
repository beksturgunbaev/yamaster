import type { Metadata } from 'next';
import {
  AboutHero,
  AboutStats,
  AboutValues,
  AboutWhyUs,
  AboutTeam,
} from './components';
import { generateBreadcrumbSchema } from '@/shared/helpers/breadcrumbSchema';

export const metadata: Metadata = {
  title: 'О нас | Usta - Профессиональная сантехника в Бишкеке',
  description:
    'Узнайте больше о Usta - ведущей сантехнической компании в Бишкеке. Более 10 лет опыта, 1000+ довольных клиентов, команда профессионалов с гарантией качества.',
  keywords:
    'о нас, Usta, сантехника Бишкек, профессиональные сантехники, команда мастеров, опыт работы, гарантия качества',
  alternates: {
    canonical: 'https://usta-kg.netlify.app/about',
  },
  openGraph: {
    title: 'О нас | Usta - Профессиональная сантехника в Бишкеке',
    description:
      'Узнайте больше о Usta - ведущей сантехнической компании в Бишкеке. Более 10 лет опыта, 1000+ довольных клиентов.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://usta-kg.netlify.app/about',
    siteName: 'Usta',
    images: [
      {
        url: 'https://usta-kg.netlify.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Команда Usta - Профессиональные сантехники',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О нас | Usta - Профессиональная сантехника в Бишкеке',
    description:
      'Узнайте больше о Usta - ведущей сантехнической компании в Бишкеке. Более 10 лет опыта, 1000+ довольных клиентов.',
    images: ['https://usta-kg.netlify.app/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const AboutPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'О нас', url: '/about' },
  ]);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Usta',
    legalName: 'Usta - Профессиональные сантехнические услуги',
    description:
      'Ведущая сантехническая компания в Бишкеке с более чем 10-летним опытом работы',
    url: 'https://usta-kg.netlify.app',
    logo: 'https://usta-kg.netlify.app/logo.png',
    image: 'https://usta-kg.netlify.app/logo.png',
    telephone: '+996501622656',
    email: 'info@usta-kg.netlify.app',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Бишкек',
      addressLocality: 'Бишкек',
      addressCountry: 'KG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8746,
      longitude: 74.6098,
    },
    areaServed: {
      '@type': 'City',
      name: 'Бишкек',
    },
    foundingDate: '2014',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 15,
    },
    slogan: 'Профессиональные сантехнические услуги в Бишкеке',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1000',
      bestRating: '5',
      worstRating: '1',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+996501622656',
      contactType: 'customer service',
      availableLanguage: ['Russian', 'Kyrgyz'],
      areaServed: 'KG',
    },
    sameAs: [
      'https://www.instagram.com/usta-kg.netlify.app',
      'https://www.facebook.com/usta-kg.netlify.app',
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutValues />
        <AboutWhyUs />
        <AboutTeam />
      </main>
    </>
  );
};

export default AboutPage;
