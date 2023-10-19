import { XlPipe } from './XlPipe'
import { ConsultationModal } from './ConsultationModal'
import { SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

const pipes = [
  {
    id: 0,
    name: 'XL PIPE-005 (7 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_1.svg'
  },
  {
    id: 1,
    name: 'XL PIPE-010 (14 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_2.png'
  },
  {
    id: 2,
    name: 'XL PIPE-015 (21 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_3.png'
  },
  {
    id: 3,
    name: 'XL PIPE-025 (28 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_4.png'
  },
  {
    id: 4,
    name: 'XL PIPE-030 (35 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_5.png'
  },
  {
    id: 5,
    name: 'XL PIPE-040 (42 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_6.png'
  },
  {
    id: 6,
    name: 'XL PIPE-050 (56 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_7.png'
  },
  {
    id: 7,
    name: 'XL PIPE-060 (70 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_8.png'
  },
  {
    id: 8,
    name: 'XL PIPE-060 (84 м)',
    info: 'Диаметр 5 см, длина 7 м',
    image: '/pipes/pipe_8.png'
  }
]

export const XLPipePageSystemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id='XLPipePageSystemSection' className='bg-xl-bg'>
        <div className='container pt-20 '>
          <h2 className='xlHeading mb-10 text-3xl md:text-4xl'>
            Как выглядит система XL PIPE
          </h2>
          <div className='flex flex-col items-center justify-center md:justify-end md:gap-12 lg:flex-row'>
            <div className='flex justify-center'>
              <div className='relative flex flex-col justify-end gap-2 md:mr-[52px] md:block md:justify-center'>
                {pipes.map(pipe => (
                  <XlPipe key={pipe.id} {...pipe} />
                ))}
              </div>
              <div className='z-[39] mt-auto flex'>
                <img src='/girl.png' className='' alt='girl' />
              </div>
            </div>
            <div className='z-30 mt-[40px] w-full max-w-[360px] border border-xl-accent bg-white py-3 px-6 md:mt-0 md:max-w-lg md:py-6 md:px-12'>
              <h2 className='xlHeading text-3xl md:text-4xl'>
                Система XL PIPE
              </h2>
              <div className='mt-[20px] text-left text-[12px] md:mt-[50px] md:text-[15px] lg:text-[18px]'>
                Представляет собой трубу диаметром 20 мм из полиэтилена высокой
                прочности с жидкостью и греющим кабелем внутри. <br />
                <br /> Поставляется в готовом виде: 9 моделей длиной от 7 до 84
                м.
                <br /> <br />
                Одна система обогревает площадь от 3 до 25 м². В одной комнате
                можно монтировать несколько систем.
              </div>
              <button
                className='button xlButton mx-auto mt-6 block min-w-[200px] text-[14px] md:min-w-[300px] md:text-[16px]'
                type='submit'
                onClick={() => setIsModalOpen(true)}
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        accentColor={'#7C3C82'}
        inputBg={'#A5A5A5'}
      />
    </>
  )
}
