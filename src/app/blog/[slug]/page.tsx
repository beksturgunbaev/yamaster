import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  BlogPostHero,
  BlogPostContent,
  BlogPostTags,
  BlogPostAuthor,
  RelatedBlogPosts,
  BlogPostCTA,
} from './components';
import { getBlogPostBySlug, BLOG_POSTS } from '@/src/shared/data/blog';
import { generateBreadcrumbSchema } from '@/src/shared/helpers/breadcrumbSchema';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Статья не найдена',
    };
  }

  return {
    title: `${post.title} | Блог Usta`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'ru_RU',
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Блог', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://usta-kg.netlify.app/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: `https://usta-kg.netlify.app${post.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Usta',
      logo: {
        '@type': 'ImageObject',
        url: 'https://usta-kg.netlify.app/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://usta-kg.netlify.app/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: 'ru',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className='min-h-screen bg-white'>
        <BlogPostHero post={post} />
        <div className='container mx-auto px-6 py-16'>
          <div className='max-w-4xl mx-auto'>
            <BlogPostContent content={post.content} />
            <BlogPostTags tags={post.tags} />
            <BlogPostAuthor author={post.author} />
          </div>
        </div>
        <RelatedBlogPosts currentPost={post} />
        <BlogPostCTA />
      </main>
    </>
  );
}