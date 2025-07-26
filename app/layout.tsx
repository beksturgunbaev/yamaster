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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
