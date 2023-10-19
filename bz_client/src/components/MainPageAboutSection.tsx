import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'

export const MainPageAboutSection = () => {
  return (
    <section
      className='bg-norepeat mt-[90px] bg-nature-bg bg-cover'
      id='aboutSection'
    >
      <div className='container'>
        <MainPageHeading
          title='about'
          subtitle='О компании'
          number='02'
          position='right'
          id='aboutHeading'
          className='-translate-y-2/3'
        />
        <div className='py-[30px] pl-[30px] lg:p-[100px]'>
          <div
            id='aboutText'
            className='ml-auto bg-white/80 p-2 text-[11px] text-black md:text-base lg:w-2/3 lg:p-5 lg:text-lg'
          >
            Компания ООО «Белстройбитзапад» основана в 2006 году как
            организация, основной сферой деятельности которой является
            строительство жилых, офисных, торговых зданий.
            <br />
            <br />
            Мы предлагаем продукт, в котором нуждаются люди.
            <br />
            <br />
            Мы любим своё дело, выполняем работу качественно, постоянно
            совершенствуемся, используя современные технологии, и, конечно,
            соблюдаем сроки и договоренности.
            <br />
            <br />
            Каждый заказчик должен осуществить свою мечту и реализовать все свои
            желания в продукте, который будет соответствовать его собственному
            образу жизни, предоставит ему максимальный простор и безупречно
            организованное пространство для деятельности.
          </div>
        </div>
      </div>
    </section>
  )
}
