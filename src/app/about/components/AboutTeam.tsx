'use client';
import { User, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Алексей Иванов',
    role: 'Главный мастер',
    experience: '15 лет опыта',
    description: 'Специалист по сложным сантехническим системам и установке водонагревательного оборудования',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Дмитрий Петров',
    role: 'Старший мастер',
    experience: '12 лет опыта',
    description: 'Эксперт по монтажу и ремонту канализационных систем, устранению засоров',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Сергей Сидоров',
    role: 'Мастер-универсал',
    experience: '10 лет опыта',
    description: 'Специалист широкого профиля, работает со всеми видами сантехнических работ',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Михаил Козлов',
    role: 'Мастер по ремонту',
    experience: '8 лет опыта',
    description: 'Эксперт по ремонту смесителей, душевых кабин и сантехнического оборудования',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export const AboutTeam = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center mb-16 animate-[fadeInUp_0.8s_ease-out]'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-6'>
            Наша{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              команда
            </span>
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            Профессионалы, которые решат любую сантехническую проблему
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {team.map((member, index) => (
            <div
              key={index}
              className='group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />

              <div className='p-6 text-center space-y-4'>
                <div className='relative inline-block'>
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                  <div className={`relative w-24 h-24 mx-auto bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <User className='w-12 h-12 text-white' />
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-1'>
                    {member.name}
                  </h3>
                  <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} mb-2`}>
                    {member.role}
                  </p>
                  <p className='text-sm text-gray-500 font-medium mb-3'>
                    {member.experience}
                  </p>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {member.description}
                  </p>
                </div>
              </div>

              <div className='absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-2xl transition-all duration-500 pointer-events-none' />
            </div>
          ))}
        </div>

        <div className='bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl animate-[fadeInUp_0.8s_ease-out_0.6s_both]'>
          <h3 className='text-3xl md:text-4xl font-extrabold mb-4'>
            Готовы помочь вам прямо сейчас!
          </h3>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Свяжитесь с нами любым удобным способом, и наши мастера приступят к работе в кратчайшие сроки
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Link
              href='tel:+996501622656'
              className='group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105'
            >
              <Phone className='w-5 h-5 group-hover:animate-bounce' />
              <span>+996 501 622 656</span>
            </Link>

            <Link
              href='mailto:turgunbaaev@gmail.com'
              className='group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105'
            >
              <Mail className='w-5 h-5 group-hover:animate-bounce' />
              <span>Написать email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
