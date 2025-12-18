'use client';
import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/banner.jpg';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const reasons = [
  'Опытные мастера с подтвержденной квалификацией',
  'Современное оборудование и инструменты',
  'Официальная гарантия на все виды работ',
  'Фиксированные цены без скрытых доплат',
  'Бесплатная консультация и выезд мастера',
  'Работаем с юридическими и физическими лицами',
  'Собственный склад запчастей и материалов',
  'Возможность срочного вызова мастера',
];

export const AboutWhyUs = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center mb-16 animate-[fadeInUp_0.8s_ease-out]'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-6'>
            Почему выбирают{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              Usta
            </span>
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            8 весомых причин доверить свою сантехнику профессионалам
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative group animate-[fadeInLeft_0.8s_ease-out]'>
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500' />

            <div className='relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-cyan-500/20 transition-shadow duration-500'>
              <Image
                src={banner}
                alt='Профессиональная работа Usta'
                className='w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />

              <div className='absolute bottom-8 left-8 right-8 text-white'>
                <h3 className='text-3xl font-bold mb-2'>10+ лет опыта</h3>
                <p className='text-lg text-gray-200'>
                  Более 5000 успешно выполненных проектов
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-6 animate-[fadeInRight_0.8s_ease-out]'>
            <div className='grid gap-4'>
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className='group flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 hover:-translate-x-2'
                  style={{
                    animation: `fadeInRight 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className='flex-shrink-0 mt-1'>
                    <CheckCircle2 className='w-6 h-6 text-cyan-600 group-hover:text-blue-600 group-hover:scale-125 transition-all duration-300' />
                  </div>
                  <p className='text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300'>
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <div className='pt-6'>
              <Link
                href='/services'
                className='group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl'
              >
                <span className='text-lg'>Посмотреть наши услуги</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
