'use client';
import { Phone, MessageCircle } from 'lucide-react';

export const ServiceCTA = () => {
  return (
    <section className='py-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl' />
        <div className='absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6'>
            Готовы заказать услугу?
          </h2>
          <p className='text-xl text-white/90 mb-10 max-w-2xl mx-auto'>
            Свяжитесь с нами прямо сейчас, и наши специалисты ответят на все ваши
            вопросы
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href='tel:+996700000000'
              className='group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center'
            >
              <Phone className='w-6 h-6 group-hover:rotate-12 transition-transform' />
              <span>+996 700 000 000</span>
            </a>

            <a
              href='https://wa.me/996700000000'
              className='group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center'
            >
              <MessageCircle className='w-6 h-6 group-hover:scale-110 transition-transform' />
              <span>Написать в WhatsApp</span>
            </a>
          </div>

          <div className='mt-10 flex flex-wrap justify-center gap-8 text-white/90'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-white' />
              <span>Быстрый выезд</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-white' />
              <span>Гарантия качества</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-white' />
              <span>Опытные мастера</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
