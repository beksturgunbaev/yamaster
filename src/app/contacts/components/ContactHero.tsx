'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import banner from '@/public/banner.jpg';

export const ContactHero = () => {
  return (
    <section className='relative min-h-[60vh] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt='Свяжитесь с нами - Usta Сантехнические услуги в Бишкеке'
        className='absolute inset-0 w-full h-full object-cover z-0'
        priority
      />

      <div className='absolute inset-0 z-10 bg-gradient-to-br from-black/85 via-black/70 to-black/75' />

      <div className='absolute inset-0 z-10 opacity-20'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700' />
      </div>

      <div className='relative z-20 container mx-auto px-6 py-20 text-center'>
        <div className='max-w-4xl mx-auto space-y-6 animate-[fadeInUp_0.8s_ease-out]'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl'>
            Свяжитесь с нами
          </h1>

          <p className='text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
            Профессиональные сантехнические услуги в Бишкеке. Мы всегда на связи и
            готовы помочь вам решить любые проблемы с сантехникой
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center pt-8'>
            <a
              href='tel:+996501622656'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300'
            >
              <Phone className='w-6 h-6 group-hover:rotate-12 transition-transform' />
              <span>Позвонить сейчас</span>
            </a>

            <a
              href='mailto:turgunbaaev@gmail.com'
              className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-300'
            >
              <Mail className='w-6 h-6 group-hover:scale-110 transition-transform' />
              <span>Написать письмо</span>
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20' />
    </section>
  );
};
