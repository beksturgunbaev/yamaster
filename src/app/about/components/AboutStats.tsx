'use client';
import { useEffect, useRef, useState } from 'react';
import { Users, Wrench, Star, Clock } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className='group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden'
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500' />

      <div className='relative z-10 flex flex-col items-center text-center space-y-4'>
        <div className='p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
          {icon}
        </div>

        <div>
          <div className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-2'>
            {count}
            {suffix}
          </div>
          <p className='text-gray-600 font-medium'>{label}</p>
        </div>
      </div>
    </div>
  );
};

export const AboutStats = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center mb-16 animate-[fadeInUp_0.8s_ease-out]'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-6'>
            Наши достижения в{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600'>
              цифрах
            </span>
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed'>
            Результаты, которыми мы гордимся и которые подтверждают наш
            профессионализм
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <StatItem
            icon={<Clock className='w-8 h-8 text-white' />}
            value={10}
            suffix='+'
            label='Лет успешной работы'
            delay={0}
          />
          <StatItem
            icon={<Users className='w-8 h-8 text-white' />}
            value={1000}
            suffix='+'
            label='Довольных клиентов'
            delay={100}
          />
          <StatItem
            icon={<Wrench className='w-8 h-8 text-white' />}
            value={5000}
            suffix='+'
            label='Выполненных заказов'
            delay={200}
          />
          <StatItem
            icon={<Star className='w-8 h-8 text-white' />}
            value={98}
            suffix='%'
            label='Положительных отзывов'
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
