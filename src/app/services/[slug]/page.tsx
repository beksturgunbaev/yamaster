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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@type': 'Organization',
      name: 'Usta',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Бишкек',
        addressCountry: 'KG',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Бишкек',
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'KGS',
    },
  };

  return (
    <>
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
