'use client';
import { MapPin, Navigation } from 'lucide-react';

export const ContactMap = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              Наше расположение
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Мы находимся в центре Бишкека и готовы выехать к вам в любой район
              города и пригорода
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 h-[450px]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0849771916283!2d74.60597931547794!3d42.87466600915614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b2e3e7%3A0x9c9b1f3e1e4f3b2a!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1234567890123!5m2!1sru!2skg'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Карта расположения Usta - сантехнические услуги в Бишкеке'
                />
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg border border-green-100'>
                <h3 className='font-bold text-gray-900 mb-3 text-lg'>
                  Зоны обслуживания
                </h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 rounded-full bg-green-500' />
                    <span>Центр города</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 rounded-full bg-green-500' />
                    <span>Жилмассивы</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 rounded-full bg-green-500' />
                    <span>Новостройки</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <div className='w-2 h-2 rounded-full bg-green-500' />
                    <span>Пригород Бишкека</span>
                  </li>
                </ul>
              </div>

              <div className='bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg border border-orange-100'>
                <h3 className='font-bold text-gray-900 mb-3 text-lg'>
                  Время прибытия
                </h3>
                <p className='text-gray-700 mb-2'>
                  В черте города:{' '}
                  <span className='font-bold text-orange-600'>30-60 минут</span>
                </p>
                <p className='text-gray-700'>
                  Пригород:{' '}
                  <span className='font-bold text-orange-600'>1-2 часа</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
