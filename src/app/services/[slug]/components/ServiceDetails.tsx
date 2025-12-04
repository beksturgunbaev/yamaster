'use client';
import { Check } from 'lucide-react';
import { IService } from '@/src/shared/types';

interface ServiceDetailsProps {
  service: IService;
}

export const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-8'>
            Что входит в услугу?
          </h2>

          <div className='grid md:grid-cols-2 gap-4'>
            {service.includes.map((item, index) => (
              <div
                key={index}
                className='flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'
              >
                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center'>
                  <Check className='w-4 h-4 text-white' />
                </div>
                <p className='text-gray-700'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
