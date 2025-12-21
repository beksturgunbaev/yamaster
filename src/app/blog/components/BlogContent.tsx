'use client';
import { useState, useMemo } from 'react';
import { BLOG_POSTS, paginateBlogPosts } from '@/src/shared/data/blog';
import { BlogHero, BlogCategories, BlogList, BlogPagination } from './index';
import { generateBreadcrumbSchema } from '@/src/shared/helpers/breadcrumbSchema';

export const BlogContent = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 9;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Блог', url: '/blog' },
  ]);

  // Filter posts by category and search
  const filteredPosts = useMemo(() => {
    let posts =
      activeCategory === 'all'
        ? BLOG_POSTS
        : BLOG_POSTS.filter((post) => post.category === activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return posts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [activeCategory, searchQuery]);

  // Paginate filtered posts
  const paginatedData = paginateBlogPosts(
    filteredPosts,
    currentPage,
    POSTS_PER_PAGE
  );

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setSearchQuery('');
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    if (query.trim()) {
      setActiveCategory('all');
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Blog list structured data
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Блог Usta - Сантехнические советы и руководства',
    description:
      'Полезные статьи о сантехнике, советы по выбору и обслуживанию',
    url: 'https://usta-kg.netlify.app/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Usta',
      logo: {
        '@type': 'ImageObject',
        url: 'https://usta-kg.netlify.app/logo.png',
      },
    },
    blogPost: filteredPosts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      '@id': `https://usta-kg.netlify.app/blog/${post.slug}`,
      headline: post.title,
      description: post.excerpt,
      image: `https://usta-kg.netlify.app${post.image}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <main className='min-h-screen bg-gray-50'>
        <BlogHero onSearch={handleSearch} />
        <BlogCategories
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <BlogList posts={paginatedData.posts} searchQuery={searchQuery} />
        {paginatedData.totalPages > 1 && (
          <BlogPagination
            currentPage={currentPage}
            totalPages={paginatedData.totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
    </>
  );
};
