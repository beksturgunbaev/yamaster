'use client';
import { useState } from 'react';
import { Send, User, Phone, MessageSquare, Loader2 } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              Оставьте заявку
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Заполните форму, и наш специалист свяжется с вами в течение 15
              минут для консультации по сантехническим услугам
            </p>
          </div>

          <div className='bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-200'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-gray-700 mb-2'
                >
                  Ваше имя *
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <User className='h-5 w-5 text-gray-400' />
                  </div>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-gray-900'
                    placeholder='Введите ваше имя'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-semibold text-gray-700 mb-2'
                >
                  Номер телефона *
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <Phone className='h-5 w-5 text-gray-400' />
                  </div>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-gray-900'
                    placeholder='+996 700 000 000'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold text-gray-700 mb-2'
                >
                  Сообщение
                </label>
                <div className='relative'>
                  <div className='absolute top-3 left-4 pointer-events-none'>
                    <MessageSquare className='h-5 w-5 text-gray-400' />
                  </div>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-gray-900 resize-none'
                    placeholder='Опишите вашу проблему или задайте вопрос'
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className='bg-green-50 border-2 border-green-200 rounded-xl p-4'>
                  <p className='text-green-800 font-semibold text-center'>
                    Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее
                    время.
                  </p>
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3'
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='w-6 h-6 animate-spin' />
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <Send className='w-6 h-6' />
                    <span>Отправить заявку</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
