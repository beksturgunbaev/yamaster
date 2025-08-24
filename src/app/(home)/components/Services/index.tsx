'use client';
import { services } from '@/src/shared/data';
import { CustomLink, ServiceCard } from '@/src/widgets';

const Services = () => {
  return (
    <div className='bg-gray-50 py-16'>
      <div className='container mx-auto px-4 flex gap-10'>
        <div className=''>
          <p className='text-[var(--colCyan)] font-semibold text-lg'>
            Наши услуги
          </p>
          <h2 className='text-4xl font-semibold'>
            Все виды сантехнических работ: монтаж, ремонт, обслуживание в
            квартире и доме.
          </h2>
          <div className='grid grid-cols-4 gap-5 pt-5 pb-7'>
            {services.slice(0, 8).map((el) => (
              <ServiceCard key={el.id} service={el} />
            ))}
          </div>
          <CustomLink
            text='Посмотреть все'
            link='/services'
            className='flex justify-center items-center space-x-3 max-w-sm mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
