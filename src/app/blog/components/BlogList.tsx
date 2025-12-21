'use client';
import { IBlogPost } from '@/src/shared/types';
import { BlogCard } from '@/src/widgets';
import { FileQuestion } from 'lucide-react';

interface BlogListProps {
  posts: IBlogPost[];
  searchQuery: string;
}

export const BlogList = ({ posts, searchQuery }: BlogListProps) => {
  if (posts.length === 0) {
    return (
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col items-center justify-center py-16'>
              <div className='w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-6'>
                <FileQuestion className='w-10 h-10 text-gray-400' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Статьи не найдены
              </h3>
              <p className='text-gray-600 text-center max-w-md'>
                {searchQuery
                  ? `По запросу "${searchQuery}" ничего не найдено. Попробуйте изменить поисковый запрос.`
                  : 'В этой категории пока нет статей.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {posts.map((post, index) => (
              <div
                key={post.id}
                className='animate-[fadeInUp_0.6s_ease-out]'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};