'use client';
import plumberImg from '@/public/plumber.webp';
import { services } from '@/src/shared/data';
import { CustomLink } from '@/src/widgets';
import Image from 'next/image';

const Services = () => {
  return (
    <div className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4 flex gap-10'>
        <div className='w-3/5'>
          <p className='text-[var(--colCyan)] font-semibold text-lg'>
            Наши услуги
          </p>
          <h2 className='text-4xl font-semibold'>
            Все виды сантехнических работ: монтаж, ремонт, обслуживание в
            квартире и доме.
          </h2>
          <div className='grid grid-cols-3 gap-5 pt-5 pb-7'>
            {services.map((el, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl mb-4'>{el.icon}</div>
                <h4 className='text-lg font-medium leading-[120%] min-h-[43.2px]'>
                  {el.name}
                </h4>
                <p className='text-sm font-light pt-1'>{el.desc}</p>
              </div>
            ))}
          </div>
          <CustomLink
            text='Посмотреть все услуги'
            link='/services'
            // Icon={Phone}
            className='flex justify-center items-center space-x-3'
          />
        </div>
        <div className='w-2/5'>
          <div className='relative'>
            <div className='w-[430px] h-[330px] bg-blue-400 absolute -top-5 -left-5'></div>
            <Image
              width={460}
              height={360}
              src={plumberImg}
              alt='Фото сантехника'
              className='relative'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
