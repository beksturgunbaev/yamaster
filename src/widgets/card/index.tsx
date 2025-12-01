import { renderIcon } from '@/src/shared/helpers/renderIcon';
import { IService } from '@/src/shared/types';
import noImg from '@/public/no-image.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServiceCard({ service }: { service: IService }) {
  const { id, title, shortDesc, price, duration, icon, image } = service;

  return (
    <Link href={`/services/${id}`} className='group block h-full'>
      <article className='relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-cyan-300 hover:-translate-y-2'>
        <div className='relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
          <Image
            src={image ?? noImg}
            alt={title}
            fill
            blurDataURL={`${noImg}`}
            className='object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 w-full h-full'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />

          <div className='absolute top-3 left-3 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
            {renderIcon(icon, 'text-cyan-600 w-6 h-6')}
          </div>
        </div>

        <div className='flex flex-1 flex-col p-5 bg-gradient-to-br from-white to-gray-50/50'>
          <h3 className='line-clamp-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-cyan-600 transition-colors duration-300'>
            {title}
          </h3>

          {shortDesc && (
            <p className='line-clamp-3 mt-2 text-sm text-gray-600 leading-relaxed'>
              {shortDesc}
            </p>
          )}

          {(price || duration) && (
            <div className='mt-auto flex flex-wrap gap-2 pt-4'>
              {price && (
                <span className='inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md'>
                  {price}
                </span>
              )}
              {duration && (
                <span className='inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md'>
                  {duration}
                </span>
              )}
            </div>
          )}
        </div>

        <div className='pointer-events-none absolute right-4 bottom-4 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:scale-110'>
          <ArrowRight className='w-5 h-5 text-white' />
        </div>

        <div className='absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-cyan-400/50 transition-all duration-300 pointer-events-none' />
      </article>
    </Link>
  );
}
