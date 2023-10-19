import { useEffect, useRef } from 'react'
import { drawLine } from '../utils/canvas'
import HeaterCalculator from './HeaterCalculator'

export const HeaterCalculationSection = () => {
  return (
    <>
      <section
        // id={'XLPipeCalculatorSection'}
        className='relative w-full bg-white'
      >
        <div className='relative h-[680px] w-full bg-white px-[15px] pt-16 lg:h-[1200px]'>
          <div
            id='HeaterCalculatorSection'
            className='relative mx-auto h-full border-[2px] border-accent bg-white px-2 pt-8 leading-tight xl:max-w-[1128px]'
          >
            <h2 className='text-center font-oswald text-[24px] font-light text-accent lg:text-[40px]'>
              Расчет стоимости отопления на калькуляторе
            </h2>
            <h3 className='mx-auto mt-5 max-w-[725px] text-center text-[12px] text-space-gray lg:text-[16px]'>
              Сделаем расчет отопления от систем XL PIPE быстро и бесплатно, с
              учетом индивидуальных параметров объекта. Для этого заполните
              указанные ниже поля и отправьте заявку на расчет.
            </h3>
            <HeaterCalculator />
          </div>
        </div>
      </section>
    </>
  )
}
