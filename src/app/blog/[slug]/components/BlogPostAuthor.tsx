'use client';
import { User } from 'lucide-react';
import { IBlogPost } from '@/src/shared/types';

interface BlogPostAuthorProps {
  author: IBlogPost['author'];
}

export const BlogPostAuthor = ({ author }: BlogPostAuthorProps) => {
  return (
    <div className='mt-12 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'>
      <div className='flex items-start gap-4'>
        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0'>
          <User className='w-8 h-8 text-white' />
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-900 mb-1'>{author.name}</h3>
          <p className='text-gray-600 mb-3'>{author.role}</p>
          <p className='text-gray-700 leading-relaxed'>
            Профессиональный сантехник с многолетним опытом работы. Специализируется на установке, ремонте и обслуживании сантехнических систем.
          </p>
        </div>
      </div>
    </div>
  );
};