import { useEffect, useRef } from 'react'
import { drawLine } from '../utils/canvas'
import Calculator from './Calculator'

export const XLPipeCalculator = () => {
  return (
    <>
      <section
        // id={'XLPipeCalculatorSection'}
        className='relative z-[5] w-full bg-xl-bg'
      >
        <div className='relative z-[5] h-[680px] w-full bg-xl-bg px-[15px] pt-16 lg:h-[1130px] lg:px-[60px]'>
          <div
            id={'XLPipeCalculatorSection'}
            style={{ transformStyle: 'preserve-3d' }}
            className='lg:xlMagic relative mx-auto h-full bg-[white] px-2 pt-8 xl:max-w-[1128px]'
          >
            <h2 className='text-center font-oswald text-[24px] font-light text-xl-accent lg:text-[40px]'>
              Расчет стоимости отопления на калькуляторе
            </h2>
            <h3 className='mx-auto mt-5 max-w-[725px] text-center text-[12px] text-space-gray lg:text-[16px]'>
              Сделаем расчет отопления от систем XL PIPE быстро и бесплатно, с
              учетом индивидуальных параметров объекта. Для этого заполните
              указанные ниже поля и отправьте заявку на расчет.
            </h3>
            <Calculator />
          </div>
        </div>
      </section>
    </>
  )
}
