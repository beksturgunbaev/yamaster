import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Footer, Header } from '@/src/widgets';

export const metadata: Metadata = {
  title: 'Услуги сантехника',
  description: 'Сантехнические услуги в городе Бишкек',
  icons: {
    icon: '/favicon.png',
  },
};

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={montserrat.className}>
        <Header />
        <div className='pt-[74px]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
