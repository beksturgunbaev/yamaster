'use client';
import {
  Shield,
  Clock,
  BadgeCheck,
  Headphones,
  Wallet,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Быстрый выезд',
    description:
      'Приезжаем в течение 30-60 минут после вызова по городу Бишкек',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description:
      'Предоставляем гарантию до 12 месяцев на все выполненные работы',
  },
  {
    icon: BadgeCheck,
    title: 'Опытные мастера',
    description:
      '10+ лет опыта работы. Все специалисты имеют профильное образование',
  },
  {
    icon: Wallet,
    title: 'Честные цены',
    description: 'Фиксированная стоимость. Без скрытых доплат и переплат',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная консультация и приём заявок без выходных',
  },
  {
    icon: Sparkles,
    title: 'Чистота',
    description:
      'Убираем за собой после работы. Оставляем всё в идеальном порядке',
  },
];

export default function Features() {
  return (
    <section className='relative bg-white py-20 overflow-hidden'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />

      <div className='container mx-auto px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4 animate-[fadeInUp_0.8s_ease-out]'>
          <div className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg'>
            <Sparkles className='w-4 h-4' />
            Наши преимущества
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
            Почему выбирают{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              Usta
            </span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Мы заботимся о каждом клиенте и гарантируем высочайшее качество
            услуг
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className='group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out]'
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                    <Icon className='w-7 h-7 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
