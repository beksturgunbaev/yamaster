'use client';
import { useState, useMemo } from 'react';
import { FAQHero } from './components/FAQHero';
import { FAQCategories } from './components/FAQCategories';
import { FAQList } from './components/FAQList';
import { FAQContact } from './components/FAQContact';
import { FAQ_ITEMS, getFAQByCategory } from '@/src/shared/data/questions';
import { generateBreadcrumbSchema } from '@/src/shared/helpers/breadcrumbSchema';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Часто задаваемые вопросы', url: '/faq' },
  ]);

  const filteredItems = useMemo(() => {
    let items = getFAQByCategory(activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveCategory('all');
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-gray-50'>
        <FAQHero onSearch={handleSearch} />
        <FAQCategories
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <FAQList items={filteredItems} />
        <FAQContact />
      </main>
    </>
  );
}
