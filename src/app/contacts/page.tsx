import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | YaMaster',
  description: 'Информация о компании YaMaster и нашей деятельности.',
};

const ContactsPage = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1>Contacts page</h1>
    </div>
  );
};

export default ContactsPage;
