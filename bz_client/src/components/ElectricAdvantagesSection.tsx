const advantages = [
  {
    id: 0,
    title: 'Выгодная ценовая политика',
    description:
      'Большие объемы продаж позволяют нам получать от партнеров лучшие цены, благодаря чему имеем возможность сделать наиболее выгодные цены клиентам. '
  },
  {
    id: 1,
    title: 'Высокий клиентский сервис',
    description:
      'Нашими клиентами являются люди, занимающиеся ремонтом, также дизайнеры, электромонтажники со всех регионов Беларуси. Мы ценим каждого покупателя.'
  },
  {
    id: 0,
    title: 'Частые обновления каталогов',
    description:
      'Мы очень активно отслеживаем появление новинок в сфере электротехнической продукции и светодиодного освещения, предлагая их по самым выгодным ценам.'
  }
]

export const ElectricAdvantagesSection = () => {
  return (
    <section className='bg-white'>
      <div className='container pt-[80px] pb-[100px]'>
        <h2 className='electricianHeading text-[36px] md:text-[40px]'>
          Преимущества, за которые клиенты выбирают нас
        </h2>
        <div className='mt-16 grid grid-cols-1 gap-8 px-[15px] md:gap-16 lg:grid-cols-3 lg:px-3'>
          {advantages.map((advantage, index) => (
            <div key={advantage.id} className='flex flex-col'>
              <div className='flex h-max items-center justify-between border-b border-b-electrician-accent py-4 text-electrician-accent'>
                <h3 className='max-w-[260px] text-lg font-light text-black'>
                  {advantage.title}
                </h3>
                <span className='mr-8 block text-4xl font-light'>
                  0{index + 1}
                </span>
              </div>
              <div className='border border-transparent pt-4 text-base font-light'>
                {advantage.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
