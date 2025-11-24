import type { Metadata } from 'next';
import { CounterInfo, MainSection, Services } from './components';

export const metadata: Metadata = {
  title: 'Услуги сантехника',
  description: 'Сантехнические услуги в городе Бишкек',
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
    </main>
  );
}
