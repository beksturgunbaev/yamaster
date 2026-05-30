'use client';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export const FAQContact = () => {
  return (
    <section className='py-16 bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 relative overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl' />
        <div className='absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6'>
              <span className='text-5xl'>💬</span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Не нашли ответ на свой вопрос?
            </h2>
            <p className='text-xl text-white/90 max-w-2xl mx-auto'>
              Свяжитесь с нами любым удобным способом, и наши специалисты с
              радостью проконсультируют вас
            </p>
          </div>

          <div className='grid sm:grid-cols-3 gap-4 mb-10'>
            <a
              href='tel:+996705727374'
              className='group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105'
            >
              <div className='flex flex-col items-center gap-3'>
                <div className='w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <Phone className='w-7 h-7 text-white' />
                </div>
                <div>
                  <p className='text-white/80 text-sm mb-1'>Позвонить</p>
                  <p className='text-white font-bold'>+996 705 727 374</p>
                </div>
              </div>
            </a>

            <a
              href='https://wa.me/996705727374'
              target='_blank'
              rel='noopener noreferrer'
              className='group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105'
            >
              <div className='flex flex-col items-center gap-3'>
                <div className='w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <MessageCircle className='w-7 h-7 text-white' />
                </div>
                <div>
                  <p className='text-white/80 text-sm mb-1'>WhatsApp</p>
                  <p className='text-white font-bold'>Написать</p>
                </div>
              </div>
            </a>

            <a
              href='mailto:turgunbaaev@gmail.com'
              className='group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105'
            >
              <div className='flex flex-col items-center gap-3'>
                <div className='w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <Mail className='w-7 h-7 text-white' />
                </div>
                <div>
                  <p className='text-white/80 text-sm mb-1'>Email</p>
                  <p className='text-white font-bold'>turgunbaaev@gmail.com</p>
                </div>
              </div>
            </a>
          </div>

          <div className='flex flex-wrap justify-center gap-8 text-white/90 text-sm'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-white' />
              <span>Ответим в течение 15 минут</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-white' />
              <span>Работаем круглосуточно</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-white' />
              <span>Бесплатная консультация</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
