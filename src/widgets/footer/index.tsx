import Link from 'next/link';
import { NAV_MENU } from '@/src/shared/data';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='bg-black/90 backdrop-blur-md border-t border-gray-800 text-gray-300 py-10'>
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-2xl font-extrabold text-cyan-400 mb-4 select-none'>
            Ya<span className='text-blue-400'>Master</span>
          </h2>
          <p className='text-gray-400 max-w-sm'>
            Профессиональные сантехнические услуги в Бишкеке. Надежность,
            качество и внимание к деталям.
          </p>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Контакты</h3>
          <ul className='space-y-3'>
            <li className='flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer'>
              <Phone size={20} />
              <a href='tel:+996700000000'>+996 504 454 408</a>
            </li>
            <li className='flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer'>
              <Mail size={20} />
              <a href='mailto:info@yamaster.kg'>turgunbaaev@gmail.com</a>
            </li>
            <li className='flex items-center gap-3 hover:text-cyan-400 transition cursor-pointer'>
              <MapPin size={20} />
              г. Бишкек, ул. Примерная, 123
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Меню</h3>
          <nav className='flex flex-col space-y-3'>
            {NAV_MENU.map((item, index) => (
              <Link
                key={index}
                href={item?.link}
                className='hover:text-cyan-400 transition'
              >
                {item?.label}
              </Link>
            ))}
            <Link
              href='tel:0504454408'
              className='mt-4 inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-full shadow-lg transition text-center'
              aria-label='Заказать звонок'
            >
              Позвноить
            </Link>
          </nav>
        </div>
      </div>
      <div className='mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 select-none'>
        &copy; {new Date().getFullYear()} YaMaster — Все права защищены
      </div>
    </footer>
  );
};
