import { ConsultationModal } from './ConsultationModal'
import { useState } from 'react'

export const HeaterScopeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className='my-10 bg-white md:my-[150px]'>
        <div
          id='HeaterScopeSection'
          className='container flex items-center justify-center gap-5 px-2 md:h-[740px] md:gap-[100px] md:px-0'
        >
          <div className='flex flex-col'>
            <img
              src='/HeaterScope.svg'
              className='md:h-full md:w-[650px]'
              alt='Heater System'
            />
            <div className='md:hidden'>
              <h3 className='xlHeading text-left text-[16px] text-black md:text-base md:leading-[50px]'>
                РЕГУЛИРОВКА ТЕМПЕРАТУРЫ
              </h3>
              <div className='text-[10px] md:mt-[40px]'>
                Неотъемлемой частью комплекта безынерционной системы отопления
                “Хитстоун” являются терморегуляторы. Их применение гарантирует
                не только создание здорового и комфортного микроклимата в
                помещении, но и сокращение потребления электроэнергии.
              </div>
            </div>
          </div>
          <div
            id='HeaterScopeSectionTextBlock'
            className='relative flex h-full flex-col justify-between py-8'
          >
            <div>
              <h3 className='xlHeading min-w-[150px] text-left text-[16px] leading-tight text-black md:text-[28px]'>
                CФЕРА ПРИМЕНЕНИЯ
                <br /> КЕРАМОГРАНИТНЫХ ОБОГРЕВАТЕЛЕЙ
              </h3>
              <div className='mt-2 md:mt-[20px]'>
                <ol className='flex max-w-[500px] list-disc flex-col pl-4 text-[10px] md:text-base'>
                  <li>Дома, дачи, квартиры, гостиницы, бани, сауны</li>
                  <li>Беседки, теплицы</li>
                  <li>Кафе рестораны, бары</li>
                  <li>
                    Офисные, торговые, производственные и складские помещения
                  </li>
                  <li>Медицинские и образовательные учреждения</li>
                  <li>
                    И другие жилые и нежилые помещения различной площади и
                    объема
                  </li>
                </ol>
              </div>
            </div>
            <div className='mt-12 hidden md:block'>
              <h3 className='xlHeading text-left leading-[50px] text-black'>
                РЕГУЛИРОВКА ТЕМПЕРАТУРЫ
              </h3>
              <div className='mt-[20px] max-w-[500px]'>
                Неотъемлемой частью комплекта безынерционной системы отопления
                “Хитстоун” являются терморегуляторы. Их применение гарантирует
                не только создание здорового и комфортного микроклимата в
                помещении, но и сокращение потребления электроэнергии.
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        accentColor={'#FCD638'}
        inputBg={'#a5a5a5'}
      />
    </>
  )
}
