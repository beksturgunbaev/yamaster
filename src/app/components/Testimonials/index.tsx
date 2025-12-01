'use client';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Азамат Иванов',
    role: 'Владелец квартиры',
    text: 'Отличная работа! Мастер приехал вовремя, быстро установил унитаз и душевую кабину. Всё работает идеально. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Гульнара Сыдыкова',
    role: 'Частный дом',
    text: 'Очень довольна качеством работы. Устранили протечку за час, цены честные. Мастер вежливый и профессиональный.',
    rating: 5,
  },
  {
    name: 'Тимур Жумабаев',
    role: 'Бизнес-центр',
    text: 'Сотрудничаем уже 2 года. Обслуживают нашу систему отопления и водоснабжения. Всегда оперативно и качественно!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className='relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 overflow-hidden'>
      <div className='absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4 animate-[fadeInUp_0.8s_ease-out]'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg'>
            <Star className='w-4 h-4 fill-white' />
            Отзывы клиентов
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            Что говорят о нас{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              наши клиенты
            </span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Более 1000 довольных клиентов доверяют нам свой комфорт
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-cyan-200 animate-[fadeInUp_0.8s_ease-out]'
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
            >
              <div className='absolute top-6 right-6 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors duration-300'>
                <Quote className='w-16 h-16 fill-current' />
              </div>

              <div className='relative z-10'>
                <div className='flex gap-1 mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                  ))}
                </div>

                <p className='text-gray-700 leading-relaxed mb-6 italic'>
                  "{testimonial.text}"
                </p>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-900'>{testimonial.name}</h4>
                    <p className='text-sm text-gray-600'>{testimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
