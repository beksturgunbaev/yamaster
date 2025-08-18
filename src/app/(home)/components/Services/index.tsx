import plumberImg from '@/public/plumber.webp';
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
