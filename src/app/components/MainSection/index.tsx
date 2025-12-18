'use client';
import Image from 'next/image';
import { useState } from 'react';
import banner from '@/public/banner.jpg';
import { CustomButton } from '@/src/widgets';
import { PhoneCall, Droplet, Clock, Shield } from 'lucide-react';

const MainSection = () => {
  const [phone, setPhone] = useState('');

  return (
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt='Профессиональные сантехнические услуги'
        className='absolute inset-0 w-full h-full object-cover z-0 scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]'
        priority
      />

      <div className='absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-black/80 via-black/50 to-transparent' />

      <div className='absolute inset-0 z-10 pointer-events-none opacity-20'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='relative z-20 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 py-20'>
        <div className='text-white max-w-2xl space-y-6 animate-[fadeInUp_0.8s_ease-out]'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wider shadow-lg animate-[slideInLeft_0.6s_ease-out] backdrop-blur-sm'>
            <Droplet className='w-4 h-4' />
            Сантехнический сервис №1 в Бишкеке
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[110%] drop-shadow-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]'>
            Профессиональная сантехника <br className='hidden sm:block' />
            начинается <br />{' '}
            <span className='relative inline-block'>
              <span className='relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-[shimmer_3s_ease-in-out_infinite]'>
                c USTA
              </span>
              <span className='absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50' />
            </span>
          </h1>

          <p className='text-xl sm:text-2xl max-w-xl text-gray-200 drop-shadow-lg animate-[fadeInUp_0.8s_ease-out_0.4s_both] leading-relaxed'>
            Оперативный выезд мастера, честные цены и 100% гарантия качества
          </p>

          <div className='grid grid-cols-3 gap-4 pt-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]'>
            <div className='flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
              <Clock className='w-8 h-8 text-cyan-400 mb-2' />
              <span className='text-sm font-semibold'>Быстрый выезд</span>
              <span className='text-xs text-gray-300'>30-60 мин</span>
            </div>
            <div className='flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
              <Shield className='w-8 h-8 text-blue-400 mb-2' />
              <span className='text-sm font-semibold'>Гарантия</span>
              <span className='text-xs text-gray-300'>до 12 мес</span>
            </div>
            <div className='flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
              <Droplet className='w-8 h-8 text-cyan-400 mb-2' />
              <span className='text-sm font-semibold'>Опыт</span>
              <span className='text-xs text-gray-300'>10+ лет</span>
            </div>
          </div>
        </div>

        <form className='bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6 border border-white/50 animate-[fadeInRight_0.8s_ease-out_0.4s_both] hover:shadow-cyan-500/20 hover:shadow-3xl transition-all duration-300'>
          <div className='text-center space-y-2'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg mb-2 animate-bounce'>
              <PhoneCall className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900'>
              Заказать звонок
            </h3>
            <p className='text-sm text-gray-600'>
              Мастер свяжется с вами в течение 5 минут
            </p>
          </div>

          <div className='space-y-4'>
            <div className='relative group'>
              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='+996 ___ ___ ___'
                className='w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 text-gray-800 text-lg transition-all duration-300 group-hover:border-cyan-400'
                required
              />
              <div className='absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity'>
                <PhoneCall className='w-5 h-5 text-cyan-500 animate-pulse' />
              </div>
            </div>

            <CustomButton
              text='Жду звонка!'
              type='submit'
              onClick={() => console.log('Phone:', phone)}
            />
          </div>

          <div className='flex items-center justify-center gap-2 text-xs text-gray-500 pt-2'>
            <Shield className='w-4 h-4' />
            <span>Ваши данные защищены</span>
          </div>
        </form>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20' />
    </section>
  );
};

export default MainSection;
