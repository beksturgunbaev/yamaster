'use client';
import { Tag } from 'lucide-react';

interface BlogPostTagsProps {
  tags: string[];
}

export const BlogPostTags = ({ tags }: BlogPostTagsProps) => {
  return (
    <div className='mt-12 pt-8 border-t border-gray-200'>
      <div className='flex items-center gap-3 mb-4'>
        <Tag className='w-5 h-5 text-cyan-600' />
        <h3 className='text-lg font-semibold text-gray-900'>Теги</h3>
      </div>
      <div className='flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 font-medium hover:from-cyan-100 hover:to-blue-100 transition-colors cursor-pointer'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};