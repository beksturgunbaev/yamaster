import type { Metadata } from 'next';
import {
  AboutHero,
  AboutStats,
  AboutValues,
  AboutWhyUs,
  AboutTeam,
} from './components';

export const metadata: Metadata = {
  title: 'О нас | Usta - Профессиональная сантехника в Бишкеке',
  description:
    'Узнайте больше о Usta - ведущей сантехнической компании в Бишкеке. Более 10 лет опыта, 1000+ довольных клиентов, команда профессионалов с гарантией качества.',
  keywords:
    'о нас, Usta, сантехника Бишкек, профессиональные сантехники, команда мастеров, опыт работы, гарантия качества',
  openGraph: {
    title: 'О нас | Usta - Профессиональная сантехника в Бишкеке',
    description:
      'Узнайте больше о Usta - ведущей сантехнической компании в Бишкеке. Более 10 лет опыта, 1000+ довольных клиентов.',
    type: 'website',
    locale: 'ru_RU',
  },
};

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <AboutValues />
      <AboutWhyUs />
      <AboutTeam />
    </main>
  );
};

export default AboutPage;
