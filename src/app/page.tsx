import {
  CTA,
  Features,
  Services,
  CounterInfo,
  MainSection,
  Testimonials,
} from './components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Чистка канализации Бишкек | Сантехник Бишкек | Быстрый выезд | Круглосуточно | Быстро и качественно',
  description:
    'Сантехнические услуги в Бишкеке: чистка канализации Бишкек, устранение засоров установка, ремонт, обслуживание. Быстрый выезд за 30-60 мин. Гарантия до 12 месяцев. 10+ лет опыта. Честные цены. ☎️ +996 705 727 374',
  keywords:
    'Чистка канализации Бишкек, сантехник Бишкек, сантехнические услуги, установка унитаза, ремонт сантехники, прочистка канализации, установка бойлера, сантехник на дом',
  alternates: {
    canonical: 'https://usta.net.kg',
  },
  openGraph: {
    title: 'Usta - Сантехнические услуги №1 в Бишкеке',
    description:
      'Профессиональный сантехник в Бишкеке. Быстрый выезд, гарантия качества, честные цены.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://usta.net.kg',
    siteName: 'Usta',
    images: [
      {
        url: 'https://usta.net.kg/logo.png',
        width: 1200,
        height: 630,
        alt: 'Usta - Сантехнические услуги в Бишкеке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usta - Сантехнические услуги №1 в Бишкеке',
    description:
      'Профессиональный сантехник в Бишкеке. Быстрый выезд, гарантия качества, честные цены.',
    images: ['https://usta.net.kg/logo.png'],
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
  icons: {
    icon: '/favicon.png',
  },
};

export default function Home() {
  return (
    <main>
      <MainSection />
      <CounterInfo />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
