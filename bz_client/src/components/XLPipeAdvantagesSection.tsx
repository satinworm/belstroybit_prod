const advantages = [
  {
    id: 0,
    title: 'Надежное оборудование',
    description:
      'Системы XL PIPE производятся по технологиям и на оборудовании из Южной Кореи. Цех с линией по сборке систем находится в Красноярске. Он лицензирован южнокорейским заводом DAEWOO ENERTEC, поэтому системы отвечают высокому качеству.'
  },
  {
    id: 1,
    title: 'Оригинальные комплектующие',
    description:
      'Материалы для производства систем поставляются из Южной Кореи: уникальный семижильный нихромовый греющий кабель в тефлоновой изоляции, система поглощения давления и соединительные фитинги.'
  },
  {
    id: 0,
    title: 'Склад в Гродно',
    description:
      'Весь модельный ряд систем XL PIPE всегда в наличии на складе. Отсюда идут отгрузки в дилерские центры по СНГ и напрямую клиентам по всей стране. Поэтому любое количество систем доставляется клиентам оперативно.'
  }
]

export const XLPipeAdvantagesSection = () => {
  return (
    <section className='bg-xl-bg'>
      <div className='container py-16 md:py-32'>
        <h2 className='xlHeading'>
          Корейские технологии – залог высокого качества
        </h2>
        <div className='mt-16 grid grid-cols-1 gap-8 px-[15px] md:gap-16 lg:grid-cols-3 lg:px-3'>
          {advantages.map((advantage, index) => (
            <div key={advantage.id} className='flex flex-col'>
              <div className='flex h-max items-center justify-between border-b border-b-xl-accent py-4 text-xl-accent'>
                <h3 className='max-w-[150px] text-xl font-light'>
                  {advantage.title}
                </h3>
                <span className='mr-8 block text-4xl font-light'>
                  0{index + 1}
                </span>
              </div>
              <div className='border border-transparent pt-4'>
                {advantage.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
