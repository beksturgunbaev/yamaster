import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вопросы | YaMaster',
  description: 'Информация о компании YaMaster и нашей деятельности.',
};

const FaqPage = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1>FAQ page</h1>
    </div>
  );
};

export default FaqPage;
