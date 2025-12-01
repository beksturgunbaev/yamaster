'use client';
import Link from 'next/link';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';

export const CTA = () => {
  return (
    <section className='relative bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 py-20 overflow-hidden'>
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='absolute inset-0 pointer-events-none opacity-[0.05]'>
        <div className='absolute inset-0 bg-grid-pattern' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp'>
          <h2 className='text-4xl md:text-6xl font-extrabold text-white leading-tight'>
            Готовы начать работу?
          </h2>

          <p className='text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed'>
            Оставьте заявку сейчас и получите{' '}
            <span className='text-yellow-300 font-bold'>скидку 10%</span> на
            первый заказ!
          </p>

          {/* CTA-кнопки */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-6'>
            <Link
              href='tel:+996504454408'
              className='group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 w-full sm:w-auto justify-center'
            >
              <Phone className='w-6 h-6 group-hover:animate-bounce' />
              <span className='text-lg'>Позвонить сейчас</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>

            <Link
              href='https://wa.me/996504454408'
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center'
            >
              <MessageCircle className='w-6 h-6 group-hover:animate-bounce' />
              <span className='text-lg'>Написать в WhatsApp</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>

          {/* Инфопанель */}
          <div className='flex items-center justify-center gap-8 pt-8 text-white/90 text-sm animate-fadeInUp delay-300'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse' />
              <span>Онлайн</span>
            </div>
            <div className='h-4 w-px bg-white/30' />
            <span>Ответим в течение 5 минут</span>
            <div className='h-4 w-px bg-white/30' />
            <span>Работаем 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};
