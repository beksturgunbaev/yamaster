import { CTA } from '../components';
import type { Metadata } from 'next';
import { ServicesHero, ServicesList } from './components';
import { SERVICES } from '@/shared/data/services';
import { generateBreadcrumbSchema } from '@/shared/helpers/breadcrumbSchema';

export const metadata: Metadata = {
  title: 'Услуги | Usta - Профессиональные сантехнические услуги в Бишкеке',
  description:
    'Полный спектр сантехнических услуг в Бишкеке: установка и замена сантехники, устранение протечек, прочистка засоров, замена труб. Гарантия качества, фиксированные цены.',
  keywords:
    'сантехнические услуги Бишкек, сантехник Бишкек, установка сантехники, ремонт сантехники, прочистка засоров, замена труб, установка смесителей, срочный сантехник',
  alternates: {
    canonical: 'https://usta-kg.netlify.app/services',
  },
  openGraph: {
    title: 'Услуги | Usta - Профессиональные сантехнические услуги в Бишкеке',
    description:
      'Полный спектр сантехнических услуг в Бишкеке. Гарантия качества, опытные мастера, фиксированные цены.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://usta-kg.netlify.app/services',
    siteName: 'Usta',
    images: [
      {
        url: 'https://usta-kg.netlify.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Сантехнические услуги Usta в Бишкеке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Услуги | Usta - Профессиональные сантехнические услуги в Бишкеке',
    description:
      'Полный спектр сантехнических услуг в Бишкеке. Гарантия качества, опытные мастера, фиксированные цены.',
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

const ServicesPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Услуги', url: '/services' },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Сантехнические услуги в Бишкеке',
    description:
      'Полный спектр профессиональных сантехнических услуг в Бишкеке',
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        '@id': `https://usta-kg.netlify.app/services/${service.slug}`,
        name: service.title,
        description: service.shortDescription,
        url: `https://usta-kg.netlify.app/services/${service.slug}`,
        image: `https://usta-kg.netlify.app/services/${service.slug}.jpg`,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Usta',
          telephone: '+996501622656',
        },
        offers: {
          '@type': 'Offer',
          price: service.price.replace(/[^\d]/g, ''),
          priceCurrency: 'KGS',
          availability: 'https://schema.org/InStock',
        },
        areaServed: {
          '@type': 'City',
          name: 'Бишкек',
        },
      },
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main>
        <ServicesHero />
        <ServicesList />
        <CTA />
      </main>
    </>
  );
};

export default ServicesPage;
