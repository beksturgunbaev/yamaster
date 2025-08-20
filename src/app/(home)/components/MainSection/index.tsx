'use client';
import Image from 'next/image';
import banner from '@/public/banner.jpg';
import { PhoneCall } from 'lucide-react';
import { CustomButton } from '@/src/widgets';

const MainSection = () => {
  return (
    <section className='relative min-h-[620px] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt='Баннер ванная'
        className='absolute inset-0 w-full h-full object-cover z-0'
        priority
      />

      <div className='absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.9),transparent_100%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.7),transparent_50%)]' />
      <div className='relative z-20 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10'>
        <div className='text-white max-w-xl'>
          <div className='mb-4 inline-block bg-gradient-to-r from-[var(--colBlue)] to-[var(--colBlue)] px-4 py-1 rounded-full text-sm font-semibold tracking-wider shadow-lg'>
            Сантехнический сервис под ключ
          </div>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[110%] drop-shadow-[3px_3px_4px_rgba(0,0,0,0.6)]'>
            Комфорт <br />
            начинается c <span className='text-[var(--colCyan)]'>YaMaster</span>
          </h1>
          <p className='mt-4 text-lg sm:text-xl max-w-[420px] text-white/90 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>
            Оперативный выезд мастера, честные цены и 100% гарантия качества.
          </p>
        </div>
        <form className='bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-sm space-y-5 border border-white/50'>
          <div className='flex items-center gap-2 text-[var(--colBlue)] font-semibold text-xl'>
            <PhoneCall className='w-6 h-6' />
            Заказать звонок
          </div>
          <input
            type='tel'
            placeholder='+996 ___ ___ ___'
            className='w-full px-4 py-3 rounded-lg border border-[var(--colBlue)] focus:outline-none focus:ring-2 focus:ring-[var(--colBlue)] text-gray-800'
            required
          />
          <CustomButton
            text='Жду звонка!'
            type='submit'
            onClick={() => console.log('test')}
          />
        </form>
      </div>
    </section>
  );
};

export default MainSection;
