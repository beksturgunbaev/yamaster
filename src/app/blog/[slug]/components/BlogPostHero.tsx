'use client';
import Image from 'next/image';
import Link from 'next/link';
import banner from '@/public/banner.jpg';
import { IBlogPost } from '@/src/shared/types';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogPostHeroProps {
  post: IBlogPost;
}

export const BlogPostHero = ({ post }: BlogPostHeroProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryName = (category: IBlogPost['category']) => {
    const names = {
      tips: 'Советы',
      guides: 'Руководства',
      news: 'Новости',
      cases: 'Кейсы',
      maintenance: 'Обслуживание',
    };
    return names[category];
  };

  return (
    <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
      <Image
        src={banner}
        alt={post.imageAlt}
        className='absolute inset-0 w-full h-full object-cover z-0'
        priority
      />

      <div className='absolute inset-0 z-10 bg-gradient-to-br from-black/90 via-black/75 to-black/80' />

      <div className='relative z-20 container mx-auto px-6 py-20'>
        <div className='max-w-4xl mx-auto'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            <span>Назад к блогу</span>
          </Link>

          <div className='mb-6'>
            <span className='inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold'>
              {getCategoryName(post.category)}
            </span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight'>
            {post.title}
          </h1>

          <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
            {post.excerpt}
          </p>

          <div className='flex flex-wrap items-center gap-6 text-gray-300'>
            <div className='flex items-center gap-2'>
              <User className='w-5 h-5' />
              <span>{post.author.name}</span>
              <span className='text-gray-500'>·</span>
              <span className='text-gray-400'>{post.author.role}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar className='w-5 h-5' />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5' />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20' />
    </section>
  );
};