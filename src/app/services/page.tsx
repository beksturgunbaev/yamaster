import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | Usta',
  description: 'Информация о компании Usta и нашей деятельности.',
};

const ServicesPage = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1>Services page</h1>
    </div>
  );
};

export default ServicesPage;
