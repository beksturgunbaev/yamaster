'use client';
import Link from 'next/link';
import { ICustomButton, ICustomLink } from '@/src/shared/types';

export const CustomButton = ({ text, type, onClick }: ICustomButton) => {
  return (
    <button
      type={type}
      className='w-full bg-gradient-to-r cursor-pointer from-[var(--colBlue)] to-[var(--colBlue)] text-white py-3 px-5 rounded-lg font-semibold hover:opacity-90 transition'
      aria-label={text}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const CustomLink = ({ text, link, Icon, className }: ICustomLink) => {
  return (
    <Link
      href={link}
      className={`${className} w-full bg-gradient-to-r cursor-pointer from-[var(--colBlue)] to-[var(--colBlue)] text-white py-3 px-5 rounded-lg font-semibold hover:opacity-90 transition`}
      aria-label={text}
    >
      {Icon && <Icon size={20} />}
      <span>{text}</span>
    </Link>
  );
};
