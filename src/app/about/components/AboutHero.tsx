'use client';
import Image from 'next/image';
import banner from '@/public/banner.jpg';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export const AboutHero = () => {
  return (
    <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt='О компании Usta'
        className='absolute inset-0 w-full h-full object-cover z-0 scale-105'
        priority
      />

      <div className='absolute inset-0 z-10 bg-gradient-to-br from-black/85 via-black/70 to-black/60' />

      <div className='absolute inset-0 z-10 opacity-20'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='relative z-20 container mx-auto px-6 py-20'>
        <div className='max-w-4xl mx-auto text-center space-y-8 animate-[fadeInUp_0.8s_ease-out]'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full text-sm font-semibold tracking-wider shadow-xl backdrop-blur-sm'>
            <Award className='w-5 h-5 text-white' />
            <span className='text-white'>Профессионалы своего дела</span>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[110%] drop-shadow-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]'>
            О компании{' '}
            <span className='relative inline-block'>
              <span className='relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-[shimmer_3s_ease-in-out_infinite]'>
                Usta
              </span>
              <span className='absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50' />
            </span>
          </h1>

          <p className='text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.4s_both]'>
            Более 10 лет мы предоставляем качественные сантехнические услуги в
            Бишкеке. Наша миссия — обеспечить комфорт и надежность в каждом доме
            и офисе.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]'>
            <div className='flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
              <Clock className='w-10 h-10 text-cyan-400 mb-3' />
              <span className='text-2xl font-bold text-white'>10+</span>
              <span className='text-sm text-gray-300 mt-1'>лет опыта</span>
            </div>
            <div className='flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
              <Users className='w-10 h-10 text-blue-400 mb-3' />
              <span className='text-2xl font-bold text-white'>1000+</span>
              <span className='text-sm text-gray-300 mt-1'>клиентов</span>
            </div>
            <div className='flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
              <ShieldCheck className='w-10 h-10 text-cyan-400 mb-3' />
              <span className='text-2xl font-bold text-white'>100%</span>
              <span className='text-sm text-gray-300 mt-1'>гарантия</span>
            </div>
            <div className='flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105'>
              <Award className='w-10 h-10 text-blue-400 mb-3' />
              <span className='text-2xl font-bold text-white'>24/7</span>
              <span className='text-sm text-gray-300 mt-1'>поддержка</span>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20' />
    </section>
  );
};
