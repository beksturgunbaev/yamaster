'use client';
import Link from 'next/link';
import { NAV_MENU } from '@/src/shared/data';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Send,
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-300 overflow-hidden'>
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 container mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          <div className='space-y-6'>
            <div>
              <h2 className='text-3xl font-extrabold mb-2'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
                  Ya
                </span>
                <span className='text-white'>Master</span>
              </h2>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Профессиональные сантехнические услуги в Бишкеке. Работаем с
                2014 года. Более 1000 довольных клиентов.
              </p>
            </div>

            <div className='flex gap-3'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110'
                aria-label='Facebook'
              >
                <Facebook size={18} />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110'
                aria-label='Instagram'
              >
                <Instagram size={18} />
              </a>
              <a
                href='https://t.me/Usta'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110'
                aria-label='Telegram'
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold text-white mb-6 relative inline-block'>
              Навигация
              <span className='absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600' />
            </h3>
            <nav className='flex flex-col space-y-3'>
              {NAV_MENU.map((item, index) => (
                <Link
                  key={index}
                  href={item?.link}
                  className='group flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300'
                >
                  <span className='w-0 h-0.5 bg-cyan-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2' />
                  {item?.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className='text-xl font-bold text-white mb-6 relative inline-block'>
              Контакты
              <span className='absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600' />
            </h3>
            <ul className='space-y-4'>
              <li>
                <a
                  href='tel:+996504454408'
                  className='group flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300'
                >
                  <Phone
                    size={20}
                    className='mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300'
                  />
                  <span>+996 504 454 408</span>
                </a>
              </li>
              <li>
                <a
                  href='mailto:turgunbaaev@gmail.com'
                  className='group flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300'
                >
                  <Mail
                    size={20}
                    className='mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300'
                  />
                  <span>turgunbaaev@gmail.com</span>
                </a>
              </li>
              <li className='group flex items-start gap-3 text-gray-400'>
                <MapPin size={20} className='mt-0.5 flex-shrink-0' />
                <span>г. Бишкек, Кыргызстан</span>
              </li>
              <li className='group flex items-start gap-3 text-gray-400'>
                <Clock size={20} className='mt-0.5 flex-shrink-0' />
                <div>
                  <p className='font-semibold text-white'>Круглосуточно</p>
                  <p className='text-sm'>Работаем 24/7 без выходных</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold text-white mb-6 relative inline-block'>
              Быстрый заказ
              <span className='absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600' />
            </h3>
            <div className='space-y-4'>
              <p className='text-gray-400 text-sm'>
                Оставьте заявку и получите скидку 10% на первый заказ!
              </p>
              <Link
                href='tel:+996504454408'
                className='flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50'
              >
                <Phone size={20} />
                <span>Позвонить</span>
              </Link>
              <Link
                href='https://wa.me/996504454408'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/50'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                </svg>
                <span>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8 mt-8'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500'>
            <p>
              &copy; {currentYear}{' '}
              <span className='font-semibold text-cyan-400'>Usta</span> — Все
              права защищены
            </p>
            <div className='flex items-center gap-6'>
              <Link
                href='/privacy'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Политика конфиденциальности
              </Link>
              <Link
                href='/terms'
                className='hover:text-cyan-400 transition-colors duration-300'
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500' />
    </footer>
  );
};
