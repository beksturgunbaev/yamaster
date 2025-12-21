import type { Metadata } from 'next';
import { BlogContent } from './components';

export const metadata: Metadata = {
  title: 'Блог | Usta - Статьи о сантехнике в Бишкеке',
  description:
    'Полезные статьи, советы и руководства по сантехническим работам. Узнайте больше о выборе, установке и обслуживании сантехники в Бишкеке.',
  keywords:
    'блог сантехника, советы сантехника, руководства, статьи о сантехнике, Бишкек, сантехнические работы',
  openGraph: {
    title: 'Блог Usta - Статьи о сантехнике',
    description:
      'Полезные статьи, советы и руководства по сантехническим работам',
    type: 'website',
    locale: 'ru_RU',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог Usta - Статьи о сантехнике',
    description:
      'Полезные статьи, советы и руководства по сантехническим работам',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
