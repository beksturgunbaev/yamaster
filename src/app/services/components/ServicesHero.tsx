'use client';
import Image from 'next/image';
import { Wrench } from 'lucide-react';
import banner from '@/public/banner.jpg';

export const ServicesHero = () => {
  return (
    <section className='relative min-h-[60vh] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt='Сантехнические услуги Usta'
        className='absolute inset-0 w-full h-full object-cover z-0'
        priority
      />

      <div className='absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/60 to-black/70' />

      <div className='absolute inset-0 z-10 opacity-20'>
        <div className='absolute top-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='relative z-20 container mx-auto px-6 py-16 text-center'>
        <div className='max-w-4xl mx-auto space-y-6 animate-[fadeInUp_0.8s_ease-out]'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full text-sm font-semibold tracking-wider shadow-xl backdrop-blur-sm mb-4'>
            <Wrench className='w-5 h-5 text-white' />
            <span className='text-white'>Полный спектр услуг</span>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl'>
            Наши{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
              услуги
            </span>
          </h1>

          <p className='text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
            Профессиональные сантехнические работы любой сложности в Бишкеке
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4 pt-6 text-white/90'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-cyan-400 rounded-full' />
              <span>12 видов услуг</span>
            </div>
            <div className='h-4 w-px bg-white/30' />
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-cyan-400 rounded-full' />
              <span>Гарантия качества</span>
            </div>
            <div className='h-4 w-px bg-white/30' />
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-cyan-400 rounded-full' />
              <span>Фиксированные цены</span>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20' />
    </section>
  );
};
