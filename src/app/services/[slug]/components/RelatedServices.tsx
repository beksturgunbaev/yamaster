'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getRelatedServices } from '@/src/shared/data/services';
import { renderIcon } from '@/src/shared/helpers/renderIcon';

interface RelatedServicesProps {
  serviceId: string;
}

export const RelatedServices = ({ serviceId }: RelatedServicesProps) => {
  const relatedServices = getRelatedServices(serviceId);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center'>
            Связанные услуги
          </h2>
          <p className='text-gray-600 text-center mb-12'>
            Возможно, вас также заинтересуют эти услуги
          </p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {relatedServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className='group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-cyan-300'
              >
                <div className='flex items-start gap-4 mb-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg'>
                    {renderIcon(service.icon, 'w-6 h-6')}
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors'>
                      {service.title}
                    </h3>
                    <p className='text-sm text-gray-600 line-clamp-2'>
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
                  <span className='text-lg font-bold text-cyan-600'>
                    {service.price}
                  </span>
                  <div className='flex items-center gap-2 text-sm text-gray-600 group-hover:text-cyan-600 transition-colors'>
                    <span>Подробнее</span>
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
