'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { IService } from '@/src/shared/types';

interface ServiceFAQProps {
  service: IService;
}

export const ServiceFAQ = ({ service }: ServiceFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center'>
            Часто задаваемые вопросы
          </h2>
          <p className='text-gray-600 text-center mb-12'>
            Ответы на популярные вопросы о данной услуге
          </p>

          <div className='space-y-4'>
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-200'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors'
                >
                  <span className='font-semibold text-gray-900 text-lg'>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className='px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4'>
                    {faq.answer}
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
