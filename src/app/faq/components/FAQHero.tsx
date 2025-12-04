'use client';
import Image from 'next/image';
import { HelpCircle, Search } from 'lucide-react';
import banner from '@/public/banner.jpg';

interface FAQHeroProps {
  onSearch: (query: string) => void;
}

export const FAQHero = ({ onSearch }: FAQHeroProps) => {
  return (
    <section className='relative min-h-[60vh] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt='Часто задаваемые вопросы о сантехнических услугах'
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
          <div className='flex justify-center mb-6'>
            <div className='w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl'>
              <HelpCircle className='w-12 h-12 text-white' />
            </div>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl'>
            Часто задаваемые вопросы
          </h1>

          <p className='text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
            Ответы на популярные вопросы о сантехнических услугах в Бишкеке. Не
            нашли ответ? Свяжитесь с нами!
          </p>

          <div className='max-w-2xl mx-auto pt-8'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Поиск по вопросам...'
                onChange={(e) => onSearch(e.target.value)}
                className='w-full px-6 py-5 pl-14 pr-6 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-cyan-400 shadow-2xl'
              />
              <Search className='absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' />
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20' />
    </section>
  );
};
