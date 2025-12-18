'use client';
import { useEffect, useRef, useState } from 'react';
import { Users, Wrench, Award } from 'lucide-react';

const Counter = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className='text-5xl font-extrabold'>
      {count}
    </div>
  );
};

export default function CounterInfo() {
  return (
    <section className='relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 py-20 overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mb-12 animate-[fadeInUp_0.8s_ease-out]'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Наши достижения в цифрах
          </h2>
          <p className='text-xl text-blue-100'>
            Результаты, которыми мы гордимся
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-[fadeInUp_0.8s_ease-out_0.2s_both]'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <Users className='w-10 h-10 text-white' />
              </div>
              <div className='text-white'>
                <div className='flex items-center justify-center gap-1'>
                  <Counter end={1000} />
                  <span className='text-5xl font-extrabold'>+</span>
                </div>
                <p className='text-xl font-semibold mt-2 text-blue-100'>
                  Довольных клиентов
                </p>
              </div>
            </div>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
          </div>

          <div className='group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-[fadeInUp_0.8s_ease-out_0.4s_both]'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <Wrench className='w-10 h-10 text-white' />
              </div>
              <div className='text-white'>
                <div className='flex items-center justify-center gap-1'>
                  <Counter end={2500} />
                  <span className='text-5xl font-extrabold'>+</span>
                </div>
                <p className='text-xl font-semibold mt-2 text-blue-100'>
                  Ремонтных работ
                </p>
              </div>
            </div>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
          </div>

          <div className='group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-[fadeInUp_0.8s_ease-out_0.6s_both]'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <Award className='w-10 h-10 text-white' />
              </div>
              <div className='text-white'>
                <div className='flex items-center justify-center gap-1'>
                  <Counter end={10} duration={1500} />
                  <span className='text-5xl font-extrabold'>+</span>
                </div>
                <p className='text-xl font-semibold mt-2 text-blue-100'>
                  Лет опыта
                </p>
              </div>
            </div>
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
          </div>
        </div>
      </div>
    </section>
  );
}
