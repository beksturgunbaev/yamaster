import './globals.css';
import { Montserrat } from 'next/font/google';
import { Footer, Header } from '@/src/widgets';

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
