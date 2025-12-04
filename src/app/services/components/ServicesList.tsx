'use client';
import Link from 'next/link';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import { SERVICES } from '@/src/shared/data/services';
import { renderIcon } from '@/src/shared/helpers/renderIcon';
import { ServiceCard } from '@/src/widgets';

export const ServicesList = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-6'>
            Полный перечень{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              услуг
            </span>
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            Выберите нужную услугу и узнайте подробности
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {SERVICES.map((el, index) => (
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
      </div>
    </section>
  );
};
