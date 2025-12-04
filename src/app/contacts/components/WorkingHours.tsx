'use client';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const WorkingHours = () => {
  const schedule = [
    { day: 'Понедельник', hours: 'Круглосуточно', isToday: false },
    { day: 'Вторник', hours: 'Круглосуточно', isToday: false },
    { day: 'Среда', hours: 'Круглосуточно', isToday: false },
    { day: 'Четверг', hours: 'Круглосуточно', isToday: false },
    { day: 'Пятница', hours: 'Круглосуточно', isToday: false },
    { day: 'Суббота', hours: 'Круглосуточно', isToday: false },
    { day: 'Воскресенье', hours: 'Круглосуточно', isToday: false },
  ];

  // Определяем текущий день
  const today = new Date().getDay();
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const currentDayName = days[today];

  return (
    <section className='py-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              График работы
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Мы работаем круглосуточно и без выходных, чтобы решить вашу проблему
              в любое время дня и ночи
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg'>
                  <Clock className='w-7 h-7 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Расписание работы
                </h3>
              </div>

              <div className='space-y-3'>
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                      item.day === currentDayName
                        ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300'
                        : 'bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        item.day === currentDayName
                          ? 'text-cyan-700'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.day}
                      {item.day === currentDayName && (
                        <span className='ml-2 text-xs bg-cyan-500 text-white px-2 py-1 rounded-full'>
                          Сегодня
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-bold ${
                        item.day === currentDayName
                          ? 'text-cyan-600'
                          : 'text-gray-900'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white'>
                <div className='flex items-start gap-4 mb-4'>
                  <CheckCircle className='w-8 h-8 flex-shrink-0' />
                  <div>
                    <h3 className='text-2xl font-bold mb-2'>Мы сейчас работаем!</h3>
                    <p className='text-green-50'>
                      Звоните прямо сейчас, наши мастера готовы выехать к вам
                    </p>
                  </div>
                </div>
                <a
                  href='tel:+996501622656'
                  className='block w-full bg-white text-green-600 font-bold py-4 px-6 rounded-xl text-center hover:bg-green-50 transition-colors shadow-lg mt-6'
                >
                  +996 501 622 656
                </a>
              </div>

              <div className='bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-200'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg'>
                    <AlertCircle className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      Аварийная служба 24/7
                    </h3>
                    <p className='text-gray-600 mb-4'>
                      При аварийных ситуациях (прорыв труб, затопление) наши
                      специалисты выезжают в течение 30 минут в любое время суток
                    </p>
                    <div className='flex items-center gap-2 text-orange-600 font-semibold'>
                      <Clock className='w-5 h-5' />
                      <span>Выезд: 30 минут</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200'>
                <h3 className='font-bold text-gray-900 mb-3'>
                  Почему мы работаем 24/7?
                </h3>
                <ul className='space-y-2 text-gray-700 text-sm'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5' />
                    <span>Аварии случаются в любое время</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5' />
                    <span>Быстрое реагирование экономит деньги</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5' />
                    <span>Удобно для работающих клиентов</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
