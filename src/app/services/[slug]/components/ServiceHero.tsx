'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { Service } from '@/src/shared/data/services';
import { renderIcon } from '@/src/shared/helpers/renderIcon';
import banner from '@/public/banner.jpg';

interface ServiceHeroProps {
  service: Service;
}

export const ServiceHero = ({ service }: ServiceHeroProps) => {
  const getCategoryLabel = (category: Service['category']) => {
    switch (category) {
      case 'installation':
        return 'Установка';
      case 'repair':
        return 'Ремонт';
      case 'cleaning':
        return 'Чистка';
      case 'emergency':
        return 'Срочно';
      case 'maintenance':
        return 'Обслуживание';
    }
  };

  const getCategoryColor = (category: Service['category']) => {
    switch (category) {
      case 'installation':
        return 'bg-blue-500';
      case 'repair':
        return 'bg-orange-500';
      case 'cleaning':
        return 'bg-purple-500';
      case 'emergency':
        return 'bg-red-500';
      case 'maintenance':
        return 'bg-green-500';
    }
  };

  return (
    <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt={service.title}
        className='absolute inset-0 w-full h-full object-cover z-0'
        priority
      />

      <div className='absolute inset-0 z-10 bg-gradient-to-br from-black/85 via-black/70 to-black/75' />

      <div className='absolute inset-0 z-10 opacity-20'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700' />
      </div>

      <div className='relative z-20 container mx-auto px-6 py-20'>
        <Link
          href='/services'
          className='inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group'
        >
          <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
          <span>Все услуги</span>
        </Link>

        <div className='max-w-4xl space-y-6 animate-[fadeInUp_0.8s_ease-out]'>
          <div className='flex items-center gap-4 flex-wrap'>
            <div className={`inline-flex items-center gap-2 ${getCategoryColor(service.category)} px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg`}>
              {renderIcon(service.icon, 'w-5 h-5')}
              <span>{getCategoryLabel(service.category)}</span>
            </div>

            <div className='flex items-center gap-6 text-white/90'>
              <div className='flex items-center gap-2'>
                <DollarSign className='w-5 h-5 text-cyan-400' />
                <span className='font-semibold'>{service.price}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='w-5 h-5 text-blue-400' />
                <span>{service.duration}</span>
              </div>
            </div>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl'>
            {service.title}
          </h1>

          <p className='text-xl sm:text-2xl text-gray-200 max-w-3xl leading-relaxed'>
            {service.fullDescription}
          </p>

          <div className='flex flex-wrap gap-4 pt-6'>
            <a
              href='tel:+996501622656'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300'
            >
              Заказать услугу
            </a>
            <a
              href='https://wa.me/996501622656'
              className='inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white/50 transition-all duration-300'
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20' />
    </section>
  );
};
