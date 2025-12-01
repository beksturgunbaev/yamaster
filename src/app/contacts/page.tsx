import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | Usta',
  description: 'Информация о компании Usta и нашей деятельности.',
};

const ContactsPage = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1>Contacts page</h1>
    </div>
  );
};

export default ContactsPage;
