import Link from 'next/link';
import { IService } from '@/src/shared/types';
import { renderIcon } from '@/src/shared/helpers/renderIcon';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';

export function ServiceCard({ service }: { service: IService }) {
  return (
    <Link
      key={service.id}
      href={`/services/${service.slug}`}
      className='group block h-full'
    >
      <article className='relative h-full flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-cyan-400 py-4 sm:py-5 px-3 sm:px-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

        <div className='relative z-10 flex flex-col h-full'>
          <div className='flex items-start justify-between mb-4'>
            <div className='flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
              {renderIcon(service.icon, 'w-7 h-7 text-white')}
            </div>

            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                service.category === 'installation'
                  ? 'bg-blue-100 text-blue-700'
                  : service.category === 'repair'
                  ? 'bg-orange-100 text-orange-700'
                  : service.category === 'cleaning'
                  ? 'bg-purple-100 text-purple-700'
                  : service.category === 'emergency'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {service.category === 'installation'
                ? 'Установка'
                : service.category === 'repair'
                ? 'Ремонт'
                : service.category === 'cleaning'
                ? 'Чистка'
                : service.category === 'emergency'
                ? 'Срочно'
                : 'Обслуживание'}
            </span>
          </div>

          <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300'>
            {service.title}
          </h3>

          <p className='text-gray-600 text-sm leading-relaxed mb-4 flex-grow'>
            {service.shortDescription}
          </p>

          <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
            <div className='flex items-center gap-2 text-sm'>
              <div className='flex items-center gap-1 text-gray-600'>
                <DollarSign className='w-4 h-4 text-cyan-600' />
                <span className='font-semibold text-nowrap'>
                  {service.price}
                </span>
              </div>
              <div className='flex items-center gap-1 text-gray-600'>
                <Clock className='w-4 h-4 text-blue-600' />
                <span className='text-xs text-nowrap'>{service.duration}</span>
              </div>
            </div>

            <div className='flex items-center gap-2 text-cyan-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300'>
              <span>Подробнее</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
            </div>
          </div>
        </div>

        <div className='absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-cyan-400/30 transition-all duration-300 pointer-events-none' />
      </article>
    </Link>
  );
}
