export default function CounterInfo() {
  return (
    <section className='max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>
      <div className='bg-blue-100 rounded-lg p-6 shadow-md'>
        <h3 className='text-4xl font-bold text-blue-700 mb-2'>1000+</h3>
        <p className='text-lg font-medium text-blue-900'>Довольных клиентов</p>
      </div>

      <div className='bg-green-100 rounded-lg p-6 shadow-md'>
        <h3 className='text-4xl font-bold text-green-700 mb-2'>2500+</h3>
        <p className='text-lg font-medium text-green-900'>Ремонтных работ</p>
      </div>

      <div className='bg-yellow-100 rounded-lg p-6 shadow-md'>
        <h3 className='text-4xl font-bold text-yellow-700 mb-2'>10</h3>
        <p className='text-lg font-medium text-yellow-900'>Лет опыта</p>
      </div>
    </section>
  );
}
