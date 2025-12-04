'use client';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+996 501 622 656',
      link: 'tel:+996501622656',
      description: 'Звоните в любое время, работаем круглосуточно',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+996 501 622 656',
      link: 'https://wa.me/996501622656',
      description: 'Быстрый ответ через мессенджер',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'turgunbaaev@gmail.com',
      link: 'mailto:turgunbaaev@gmail.com',
      description: 'Отправьте нам письмо, ответим в течение часа',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Круглосуточно, 24/7',
      link: null,
      description: 'Аварийная служба работает без выходных',
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              Как с нами связаться
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Выберите удобный способ связи. Наши специалисты готовы
              проконсультировать вас по любым вопросам сантехнических услуг в
              Бишкеке
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.link.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className='group block h-full'
                >
                  <div className='h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-cyan-300 transform hover:-translate-y-2'>
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className='w-7 h-7 text-white' />
                    </div>

                    <h3 className='text-lg font-bold text-gray-900 mb-2'>
                      {item.title}
                    </h3>

                    <p className='text-xl font-semibold text-cyan-600 mb-2 group-hover:text-blue-600 transition-colors'>
                      {item.content}
                    </p>

                    <p className='text-sm text-gray-600'>{item.description}</p>
                  </div>
                </a>
              ) : (
                <div className='h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg border border-gray-200'>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className='w-7 h-7 text-white' />
                  </div>

                  <h3 className='text-lg font-bold text-gray-900 mb-2'>
                    {item.title}
                  </h3>

                  <p className='text-xl font-semibold text-cyan-600 mb-2'>
                    {item.content}
                  </p>

                  <p className='text-sm text-gray-600'>{item.description}</p>
                </div>
              );

              return <div key={index}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
