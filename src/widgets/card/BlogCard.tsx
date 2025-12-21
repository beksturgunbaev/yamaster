import Link from 'next/link';
import Image from 'next/image';
import { IBlogPost } from '@/src/shared/types';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export function BlogCard({ post }: { post: IBlogPost }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: IBlogPost['category']) => {
    switch (category) {
      case 'tips':
        return 'bg-yellow-100 text-yellow-700';
      case 'guides':
        return 'bg-blue-100 text-blue-700';
      case 'news':
        return 'bg-green-100 text-green-700';
      case 'cases':
        return 'bg-purple-100 text-purple-700';
      case 'maintenance':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryName = (category: IBlogPost['category']) => {
    switch (category) {
      case 'tips':
        return 'Советы';
      case 'guides':
        return 'Руководства';
      case 'news':
        return 'Новости';
      case 'cases':
        return 'Кейсы';
      case 'maintenance':
        return 'Обслуживание';
      default:
        return category;
    }
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group block h-full'
    >
      <article className='relative h-full flex flex-col bg-white rounded-2xl border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

        {/* Featured Image */}
        <div className='relative h-48 w-full overflow-hidden'>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />

          {/* Category Badge */}
          <div className='absolute top-4 left-4'>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
              {getCategoryName(post.category)}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className='absolute top-4 right-4'>
              <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>
                Рекомендуем
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='relative z-10 flex flex-col flex-grow p-5'>
          <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2'>
            {post.title}
          </h3>

          <p className='text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3'>
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 hover:bg-cyan-50 hover:text-cyan-700 transition-colors'
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Meta Information */}
          <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2 text-xs text-gray-500'>
                <User className='w-3 h-3' />
                <span>{post.author.name}</span>
              </div>
              <div className='flex items-center gap-3 text-xs text-gray-500'>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-3 h-3' />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <Clock className='w-3 h-3' />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-2 text-cyan-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300'>
              <span>Читать</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
            </div>
          </div>
        </div>

        <div className='absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-cyan-400/30 transition-all duration-300 pointer-events-none' />
      </article>
    </Link>
  );
}