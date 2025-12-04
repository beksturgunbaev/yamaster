'use client';
import { Service } from '@/src/shared/data/services';

interface ServiceProcessProps {
  service: Service;
}

export const ServiceProcess = ({ service }: ServiceProcessProps) => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center'>
            Как мы работаем
          </h2>
          <p className='text-gray-600 text-center mb-12 max-w-2xl mx-auto'>
            Пошаговый процесс выполнения работы
          </p>

          <div className='relative'>
            {/* Vertical line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-600 hidden md:block' />

            <div className='space-y-8'>
              {service.process.map((step, index) => (
                <div key={index} className='relative flex items-start gap-6'>
                  {/* Step number */}
                  <div className='flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg z-10'>
                    <span className='text-2xl font-bold text-white'>
                      {index + 1}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className='flex-1 pt-3'>
                    <div className='bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200'>
                      <p className='text-lg text-gray-800 font-medium'>
                        {step}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
