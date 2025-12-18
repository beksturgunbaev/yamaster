'use client';
import {
  Shield,
  Wrench,
  HelpCircle,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';
import { FAQ_CATEGORIES } from '@/src/shared/data/questions';

interface FAQCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FAQCategories = ({
  activeCategory,
  onCategoryChange,
}: FAQCategoriesProps) => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      HelpCircle,
      DollarSign,
      Wrench,
      AlertTriangle,
      Shield,
    };
    const Icon = icons[iconName];
    return Icon || HelpCircle;
  };

  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Категории вопросов
          </h2>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
            <button
              onClick={() => onCategoryChange('all')}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-xl scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <div className='flex flex-col items-center gap-2'>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeCategory === 'all'
                      ? 'bg-white/20'
                      : 'bg-gradient-to-br from-gray-300 to-gray-400'
                  }`}
                >
                  <span className='text-2xl'>📋</span>
                </div>
                <span className='text-sm font-semibold text-center'>Все</span>
              </div>
            </button>

            {FAQ_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-br ${category.color} text-white shadow-xl scale-105`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <div className='flex flex-col items-center gap-2'>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeCategory === category.id
                        ? 'bg-white/20'
                        : `bg-gradient-to-br ${category.color}`
                    }`}
                  >
                    {(() => {
                      const Icon = getIcon(category.icon);
                      return <Icon className='w-6 h-6 text-white' />;
                    })()}
                  </div>
                  <span className='text-sm font-semibold text-center'>
                    {category.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
