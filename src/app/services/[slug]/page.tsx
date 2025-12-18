import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceCTA } from './components/ServiceCTA';
import { ServiceFAQ } from './components/ServiceFAQ';
import { ServiceHero } from './components/ServiceHero';
import { ServiceDetails } from './components/ServiceDetails';
import { ServiceProcess } from './components/ServiceProcess';
import { ServiceBenefits } from './components/ServiceBenefits';
import { RelatedServices } from './components/RelatedServices';
import { getServiceBySlug, SERVICES } from '@/src/shared/data/services';
import { generateBreadcrumbSchema } from '@/shared/helpers/breadcrumbSchema';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Услуга не найдена',
    };
  }

  return {
    title: `${service.title} в Бишкеке | Usta - Сантехнические услуги`,
    description: service.fullDescription,
    keywords: service.keywords.join(', '),
    openGraph: {
      title: service.title,
      description: service.fullDescription,
      type: 'website',
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Услуги', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://usta-kg.netlify.app/services/${service.slug}`,
    name: service.title,
    description: service.fullDescription,
    url: `https://usta-kg.netlify.app/services/${service.slug}`,
    image: `https://usta-kg.netlify.app/services/${service.slug}.jpg`,
    serviceType: service.category,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Usta',
      telephone: '+996501622656',
      email: 'info@usta-kg.netlify.app',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Бишкек',
        addressCountry: 'KG',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '1000',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Бишкек',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://usta-kg.netlify.app/services/${service.slug}`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+996501622656',
        contactType: 'customer service',
        availableLanguage: ['Russian', 'Kyrgyz'],
      },
    },
    offers: {
      '@type': 'Offer',
      price: service.price.replace(/[^\d]/g, ''),
      priceCurrency: 'KGS',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split('T')[0],
    },
    potentialAction: {
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://usta-kg.netlify.app/contacts',
        inLanguage: 'ru',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-gray-50'>
        <ServiceHero service={service} />
        <ServiceDetails service={service} />
        <ServiceBenefits service={service} />
        <ServiceProcess service={service} />
        <ServiceFAQ service={service} />
        <RelatedServices serviceId={service.id} />
        <ServiceCTA />
      </main>
    </>
  );
}
