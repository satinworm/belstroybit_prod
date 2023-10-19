import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'
import { ElectricianPageHeading } from './ElectricianPageHeading'
import { ConsultationModal } from './ConsultationModal'
import { useState } from 'react'

export const ElectricPageAboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <section
        className='bg-norepeat mt-7 bg-cover lg:mt-[90px]'
        id='electricAboutSection'
      >
        {/*<div className=''>*/}
        <div className='container'>
          <ElectricianPageHeading
            title='Description'
            // subtitle='Описание'
            number=''
            position='left'
            id='electricAboutHeading'
            className='translate-y-2/3'
          />
        </div>
        <div className='bgElectricianAbout relative mt-5 flex md:justify-between'>
          <div className='container ml-0 w-[100%] max-w-[300px] py-[15px] pl-[15px] text-[11px] text-black sm:max-w-[450px] md:ml-auto md:w-full md:max-w-[550px] md:py-[50px] md:pl-[100px] md:text-[18px] lg:max-w-[700px]'>
            <div
              className={
                'mb-[15px] text-[18px] font-medium leading-[20px] tracking-[-0.035em] md:pb-[40px] md:text-[30px] md:leading-[37px]'
              }
            >
              Уcлуги Электрика в Гродно под ключ и с гарантией качества
            </div>
            <b className='font-semibold'>Срочно</b> потребовались услуги
            электрика ?<br />
            Или нужна помощь в установке электрооборудования ?
            <br />
            <br />
            Обратитесь в компанию{' '}
            <b className='font-semibold'>“БелстройБитЗапад”</b> — наш сотрудник
            будет направлен на ваш объект в течение{' '}
            <b className='font-semibold'>1 часа</b> после заявки!
            <br />
            <br />
            Электромонтажные работы требуют соответствующих{' '}
            <b className='font-semibold'>знаний</b> и
            <b className='font-semibold'> квалификации</b>.
            <br />
            Услуги электрика — область, в которой непрофессионализм{' '}
            <b className='font-semibold'>недопустим</b>, а попытки сэкономить
            могут не только привести <b className='font-semibold'>к порче</b>{' '}
            дорогого оборудования, но и крайне{' '}
            <b className='font-semibold'>опасны для жизни и здоровья</b>.
            <br />
            <br />
            Поэтому рекомендуем довериться <b>профессионалам</b>!
            <br />
            Наши сотрудники обладают соответствующими разрядами и допусками к
            проведению работ.
            <div>
              <button
                className='primaryButton button hover:buttonShadow mt-16 w-fit max-w-[300px] text-[16px] transition duration-300 md:text-[16px]'
                id='phoneButton'
                type='button'
                onClick={() => setIsModalOpen(true)}
              >
                Получить консультацию
              </button>
            </div>
            <div className='relative mt-7 w-fit text-[12px] text-[#676767]'>
              *остаьте заявку и мы с вами
              <br />
              свяжемся в блжайшее время
              <img
                className='absolute -top-[8px] -right-[40px] h-[28px] w-[38px]'
                src='/buttonElectricAbout.svg'
                alt='arrowBtn'
              />
            </div>
          </div>
          <div>
            <img
              src='/electricianLampochka.png'
              className='hidden md:block md:h-[700px] md:w-[466px]'
              alt='Lampochka'
            />
            <img
              src='/lampochka_mobile.png'
              className='absolute top-0 right-0 h-[410px] w-[138px] md:hidden'
              alt='Lampochka'
            />
          </div>
        </div>
        {/*<div className='container pl-[100px]'></div>*/}
        {/*</div>*/}
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
