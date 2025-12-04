'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/src/shared/data/questions';

interface FAQListProps {
  items: FAQItem[];
}

export const FAQList = ({ items }: FAQListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (items.length === 0) {
    return (
      <section className='py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='container mx-auto px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <div className='bg-white rounded-2xl p-12 shadow-lg'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Ничего не найдено
              </h3>
              <p className='text-gray-600'>
                Попробуйте изменить поисковый запрос или выберите другую
                категорию
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-8 text-center'>
            <p className='text-gray-600'>
              Найдено вопросов:{' '}
              <span className='font-bold text-cyan-600'>{items.length}</span>
            </p>
          </div>

          <div className='space-y-4'>
            {items.map((item, index) => (
              <div
                key={item.id}
                className='bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-cyan-300 transition-all duration-300'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors'
                >
                  <div className='flex items-start gap-4 flex-1'>
                    <div className='flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg'>
                      {index + 1}
                    </div>
                    <span className='font-bold text-gray-900 text-lg pt-1'>
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 mt-1 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className='px-6 pb-6 pl-[4.5rem]'>
                    <div className='bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-5 border-l-4 border-cyan-500'>
                      <p className='text-gray-700 leading-relaxed'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
