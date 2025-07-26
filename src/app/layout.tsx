import { Footer, Header } from '@/src/widgets';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги сантехника',
  description: 'Сантехнические услуги в городе Бишкек',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <div className='pt-[74px]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
