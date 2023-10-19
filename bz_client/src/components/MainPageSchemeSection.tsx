import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'
import { WorkStep } from './WorkStep'

const works = [
  {
    title: 'Заказ услуги',
    image: '/icons/checkbox.svg',
    index: 1,
    span: 'col-span-2 lg:col-span-1 w-1/3'
  },
  {
    title: 'Выезд на участок',
    image: '/icons/02.svg',
    index: 2,
    span: 'col-span-2 lg:col-span-1 w-1/3'
  },
  {
    title: 'Подписание договора',
    image: '/icons/03.svg',
    index: 3,
    span: 'col-span-2 lg:col-span-1 w-1/3'
  }
]
const works2 = [
  {
    title: 'Сдача обьекта',
    image: '/icons/04.svg',
    index: 4,
    span: 'col-span-3 lg:col-span-1 w-1/2'
  },
  {
    title: 'Добро пожаловать в дом',
    image: '/icons/05.svg',
    index: 5,
    span: 'col-span-3 lg:col-span-1 w-1/2'
  }
]

export const MainPageSchemeSection = () => {
  return (
    <section className='container mt-[20px] lg:mt-[90px]'>
      <MainPageHeading
        title='Work'
        subtitle='Cхема работы'
        number='03'
        id='schemeHeading'
        position='left'
      />
      <div className='flex w-full flex-col justify-center lg:flex-row lg:gap-[5rem]'>
        <ul className='my-[30px] flex justify-center gap-3 px-[10px] lg:gap-[5rem]'>
          {works.map((work, idx) => (
            <WorkStep index={idx} {...work} key={idx} />
          ))}
        </ul>
        <ul
          className={
            'my-[30px] flex items-center justify-center px-[10px] lg:my-[100px] lg:gap-[5rem]'
          }
        >
          {works2.map((work, idx) => (
            <WorkStep index={idx} {...work} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  )
}
