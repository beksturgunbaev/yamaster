import { renderIcon } from '@/src/shared/helpers/renderIcon';
import { IService } from '@/src/shared/types';
import noImg from '@/public/no-image.jpg';
import Image from 'next/image';
import Link from 'next/link';

export function ServiceCard({ service }: { service: IService }) {
  const { id, title, shortDesc, price, duration, icon, image } = service;
  console.log('image', image);

  return (
    <Link href={`/services/${id}`} className='group block'>
      <article className='relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-400 bg-white shadow-sm transition hover:shadow-md'>
        <div className='relative h-36 w-full md:h-40 overflow-hidden'>
          <Image
            src={image ?? noImg}
            alt={title}
            fill
            blurDataURL={`${noImg}`}
            className='object-cover transition duration-300 group-hover:scale-[1.03] w-full h-full'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
        </div>
        <div className='flex flex-1 flex-col p-3'>
          <div className='flex items-center gap-2'>
            {renderIcon(icon, 'shrink-0 text-[var(--colBlue)]')}
            <h3 className='line-clamp-2 font-semibold leading-snug md:text-xl'>
              {title}
            </h3>
          </div>
          {shortDesc && (
            <p className='line-clamp-3 mt-1 text-sm text-gray-600 md:text-[15px]'>
              {shortDesc}
            </p>
          )}
          {(price || duration) && (
            <div className='mt-auto flex flex-wrap gap-2 pt-3'>
              {price && (
                <span className='rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700'>
                  {price}
                </span>
              )}
              {duration && (
                <span className='rounded-full border border-sky-200/70 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700'>
                  {duration}
                </span>
              )}
            </div>
          )}
        </div>
        <div className='pointer-events-none absolute right-3 top-3 rounded-full border border-gray-400 bg-white/80 p-2 opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-4 w-4 text-gray-500'
          >
            <path
              fillRule='evenodd'
              d='M13.72 3.72a.75.75 0 011.06 0l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 11-1.06-1.06L18.94 12l-5.22-5.22a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M3 12a.75.75 0 01.75-.75h16.69a.75.75 0 010 1.5H3.75A.75.75 0 013 12z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
