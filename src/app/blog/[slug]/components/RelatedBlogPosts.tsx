'use client';
import { IBlogPost } from '@/src/shared/types';
import { BLOG_POSTS } from '@/src/shared/data/blog';
import { BlogCard } from '@/src/widgets';

interface RelatedBlogPostsProps {
  currentPost: IBlogPost;
}

export const RelatedBlogPosts = ({ currentPost }: RelatedBlogPostsProps) => {
  const relatedPosts = BLOG_POSTS.filter(
    (post) =>
      post.id !== currentPost.id &&
      (post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag)))
  ).slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
            Читайте также
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};