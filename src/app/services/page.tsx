import { CTA } from '../components';
import type { Metadata } from 'next';
import { ServicesHero, ServicesList } from './components';

export const metadata: Metadata = {
  title: 'Услуги | Usta - Профессиональные сантехнические услуги в Бишкеке',
  description:
    'Полный спектр сантехнических услуг в Бишкеке: установка и замена сантехники, устранение протечек, прочистка засоров, замена труб. Гарантия качества, фиксированные цены.',
  keywords:
    'сантехнические услуги Бишкек, сантехник Бишкек, установка сантехники, ремонт сантехники, прочистка засоров, замена труб, установка смесителей, срочный сантехник',
  openGraph: {
    title: 'Услуги | Usta - Профессиональные сантехнические услуги в Бишкеке',
    description:
      'Полный спектр сантехнических услуг в Бишкеке. Гарантия качества, опытные мастера, фиксированные цены.',
    type: 'website',
    locale: 'ru_RU',
  },
};

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <CTA />
    </main>
  );
};

export default ServicesPage;
