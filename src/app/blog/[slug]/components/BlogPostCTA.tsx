'use client';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export const BlogPostCTA = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-cyan-500 to-blue-600'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-6'>
            Нужна помощь с сантехникой?
          </h2>
          <p className='text-xl text-white/90 mb-10 leading-relaxed'>
            Наши профессиональные мастера готовы помочь с любыми сантехническими работами.
            Звоните или пишите прямо сейчас!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='tel:+996501622656'
              className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl'
            >
              <Phone className='w-5 h-5' />
              <span>+996 501 622 656</span>
            </a>
            <a
              href='https://wa.me/996501622656'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl'
            >
              <MessageCircle className='w-5 h-5' />
              <span>WhatsApp</span>
            </a>
          </div>
          <div className='mt-8'>
            <Link
              href='/services'
              className='text-white hover:text-white/80 underline transition-colors'
            >
              Посмотреть все наши услуги →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};