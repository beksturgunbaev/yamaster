'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../public/logo.png';
import { NAV_MENU } from '@/src/shared/data';
import { Menu, X, Phone } from 'lucide-react';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30'>
      <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300'
        >
          <Image src={logo} alt='YaMaster' width={140} priority />
        </Link>
        <nav className='hidden md:flex space-x-10 font-semibold text-blue-900'>
          {NAV_MENU.map((item, index) => (
            <Link
              key={index}
              href={item?.link}
              className='relative group after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--colBlue)] after:transition-all after:duration-300 hover:after:w-full'
            >
              {item?.label}
            </Link>
          ))}
        </nav>
        <Link
          href='tel:0504454408'
          className='hidden md:flex items-center gap-2 bg-[var(--colBlue)] hover:bg-opacity-80 text-white font-bold py-2.5 px-4 rounded-full shadow-lg transition transform hover:-translate-y-0.5 hover:scale-105'
          aria-label='Позвонить'
        >
          <Phone size={20} />
          Позвонить
        </Link>
        <button
          className='md:hidden p-2 text-blue-700 hover:text-cyan-600 transition'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>{' '}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-sm border-t border-blue-200 transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <nav className='flex flex-col space-y-4 px-6 text-blue-900 font-semibold'>
          {NAV_MENU.map((item, index) => (
            <Link
              key={index}
              href={item?.link}
              className='hover:text-cyan-600 transition-colors'
              onClick={() => setOpen(false)}
            >
              {item?.label}
            </Link>
          ))}
          <Link
            href='/#callback'
            className='mt-4 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-full shadow-lg transition'
            onClick={() => setOpen(false)}
            aria-label='Заказать звонок'
          >
            <Phone size={20} className='mr-2' />
            Заказать звонок
          </Link>
        </nav>
      </div>
    </header>
  );
};
