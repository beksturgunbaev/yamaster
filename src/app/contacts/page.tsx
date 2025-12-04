import type { Metadata } from 'next';
import { ContactHero } from './components/ContactHero';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { ContactMap } from './components/ContactMap';
import { WorkingHours } from './components/WorkingHours';

export const metadata: Metadata = {
  title: 'Контакты | Usta - Сантехнические услуги в Бишкеке круглосуточно',
  description:
    'Свяжитесь с нами для вызова сантехника в Бишкеке. Работаем 24/7, выезд мастера в течение 30-60 минут. Телефон: +996 700 000 000. Профессиональные сантехнические услуги, аварийная служба.',
  keywords: [
    'контакты сантехника Бишкек',
    'вызов сантехника',
    'сантехник круглосуточно',
    'телефон сантехника Бишкек',
    'адрес сантехнической службы',
    'аварийная сантехника',
    'сантехник на дом',
    'срочный сантехник',
    'сантехнические услуги контакты',
    'сантехник Бишкек телефон',
  ].join(', '),
  openGraph: {
    title: 'Контакты - Вызов сантехника в Бишкеке 24/7 | Usta',
    description:
      'Профессиональные сантехники в Бишкеке. Работаем круглосуточно, быстрый выезд, опытные мастера. Звоните: +996 700 000 000',
    type: 'website',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: '/contacts',
  },
};

export default function ContactsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Usta - Сантехнические услуги',
    description:
      'Профессиональные сантехнические услуги в Бишкеке. Работаем круглосуточно 24/7. Аварийная служба, опытные мастера, гарантия качества.',
    image: 'https://usta.kg/logo.png',
    '@id': 'https://usta.kg',
    url: 'https://usta.kg',
    telephone: '+996700000000',
    email: 'info@usta.kg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Исанова 42',
      addressLocality: 'Бишкек',
      addressCountry: 'KG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8746,
      longitude: 74.6098,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Бишкек',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Сантехнические услуги',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Аварийная сантехническая служба',
            description: 'Экстренный выезд при аварийных ситуациях 24/7',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Установка сантехники',
            description:
              'Профессиональная установка смесителей, унитазов, ванн, душевых кабин',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ремонт сантехники',
            description:
              'Устранение протечек, ремонт труб, замена деталей сантехники',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-gray-50'>
        <ContactHero />
        <ContactInfo />
        <WorkingHours />
        <ContactForm />
        <ContactMap />
      </main>
    </>
  );
}
