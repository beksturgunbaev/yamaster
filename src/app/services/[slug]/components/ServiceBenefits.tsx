'use client';
import { CheckCircle } from 'lucide-react';
import { IService } from '@/src/shared/types';

interface ServiceBenefitsProps {
  service: IService;
}

export const ServiceBenefits = ({ service }: ServiceBenefitsProps) => {
  return (
    <section className='py-16 bg-gradient-to-br from-cyan-50 to-blue-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center'>
            Преимущества нашей работы
          </h2>
          <p className='text-gray-600 text-center mb-12 max-w-2xl mx-auto'>
            Мы гарантируем высокое качество выполнения работ и используем только
            проверенные материалы
          </p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0'>
                    <CheckCircle className='w-8 h-8 text-green-500' />
                  </div>
                  <p className='text-gray-700 font-medium leading-relaxed'>
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
