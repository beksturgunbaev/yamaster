'use client';
import { Heart, Shield, Zap, Users, Award, Clock } from 'lucide-react';

const values = [
  {
    icon: <Heart className='w-8 h-8' />,
    title: 'Честность',
    description:
      'Мы всегда говорим правду о стоимости и сроках работы. Никаких скрытых платежей и неожиданных доплат.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Shield className='w-8 h-8' />,
    title: 'Надежность',
    description:
      'Гарантируем качество выполненных работ. Используем только проверенные материалы и оборудование.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: <Zap className='w-8 h-8' />,
    title: 'Оперативность',
    description:
      'Выезжаем на вызов в течение 30-60 минут. Ценим ваше время и решаем проблемы максимально быстро.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Users className='w-8 h-8' />,
    title: 'Клиентоориентированность',
    description:
      'Индивидуальный подход к каждому клиенту. Учитываем все пожелания и предлагаем оптимальные решения.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <Award className='w-8 h-8' />,
    title: 'Профессионализм',
    description:
      'Наши мастера имеют многолетний опыт и регулярно повышают квалификацию на курсах и тренингах.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <Clock className='w-8 h-8' />,
    title: 'Доступность 24/7',
    description:
      'Работаем круглосуточно без выходных. Готовы помочь в любое время дня и ночи.',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export const AboutValues = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center mb-16 animate-[fadeInUp_0.8s_ease-out]'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-6'>
            Наши{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              ценности
            </span>
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            Принципы, которыми мы руководствуемся в работе с каждым клиентом
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {values.map((value, index) => (
            <div
              key={index}
              className='group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              <div className='absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div
                  className={`w-full h-full bg-gradient-to-br ${value.gradient} rounded-full blur-3xl opacity-20`}
                />
              </div>

              <div className='relative z-10 space-y-4'>
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  {value.icon}
                </div>

                <h3 className='text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300'>
                  {value.title}
                </h3>

                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
