'use client';
import { Wrench } from 'lucide-react';
import { SERVICES } from '@/src/shared/data/services';
import { CustomLink, ServiceCard } from '@/src/widgets';

const Services = () => {
  return (
    <section className='relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 overflow-hidden'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-0' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-0' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4 animate-[fadeInUp_0.8s_ease-out]'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg'>
            <Wrench className='w-4 h-4' />
            Наши услуги
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            Все виды{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              сантехнических работ
            </span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Монтаж, ремонт и обслуживание в квартире и доме. Быстро, качественно
            и с гарантией
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {SERVICES.slice(0, 8).map((el, index) => (
            <div
              key={el.id}
              className='animate-[fadeInUp_0.8s_ease-out]'
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <ServiceCard service={el} />
            </div>
          ))}
        </div>

        <div className='text-center animate-[fadeInUp_0.8s_ease-out_0.8s_both]'>
          <CustomLink
            text='Посмотреть все услуги'
            link='/services'
            className='inline-flex justify-center items-center max-w-md gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
