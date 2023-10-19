import { SubmitHandler, useForm } from 'react-hook-form'
type TFormProps = {
  phoneNumber: string
  name: string
}
const arr = [
  {
    description:
      'Вся представленная у нас электропродукция оригинального качества.'
  },
  {
    description:
      'Благодаря наличию большей части ассортимента — доставляем быстро. '
  },
  {
    description:
      'Всегда на стороне клиента, предлагаем гибкие условия оплаты и доставки. '
  },
  {
    description:
      'Мы всегда на связи с клиентом: общение через популярные мессенджеры.'
  },
  {
    description:
      'Мы лояльны в вопросах ценообразования и готовы сделать вам скидку.'
  },
  {
    description: 'Все работники имеют соответствующие сертификаты и допуски.'
  }
]
export const ElectricAndForm = () => {
  const { register, handleSubmit, watch } = useForm<TFormProps>({
    defaultValues: {
      phoneNumber: '',
      name: ''
    }
  })
  const onSubmit: SubmitHandler<TFormProps> = () => {}
  return (
    <section className='z-10 my-14 px-[10px]'>
      <div className='container flex justify-center lg:gap-[300px]'>
        <div className='hidden lg:block'>
          <img src='/electric.png' alt='Electric' />
        </div>

        <div className='w-full max-w-[440px]'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='electricFormShadow flex h-full w-full flex-col gap-4 p-[24px]'
          >
            <div className='electricianHeading text-3xl font-semibold tracking-normal xl:text-2xl'>
              Бесплатная консультация
            </div>
            <div className='font-roboto mt-6 text-justify text-[15px] leading-4'>
              Укажите ваши данные и наш специалист свяжется с вами в ближайшее
              время и поможет вам выбрать самый оптимальный вариант для решения
              вашего вопроса
            </div>
            <div className='mt-1 text-xxs font-light text-[#676767]'>
              *Заполни анкету и получи обратную связь уже сейчас
            </div>
            <div>
              <input
                type='text'
                placeholder='Ваше имя'
                className={'placeholder:text-[16px]'}
                style={{ border: '1.22px solid #FCD638', textAlign: 'left' }}
                {...register('name', { required: true })}
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Ваш телефон'
                className={'placeholder:text-[16px]'}
                style={{ border: '1.22px solid #FCD638', textAlign: 'left' }}
                {...register('phoneNumber', { required: true })}
              />
            </div>
            <button type='submit' className='electricianButton button mt-4'>
              Получить консультацию
            </button>
          </form>
        </div>
      </div>
      <div
        id={'ElectricStepAdvantages'}
        className='container z-10 mt-[115px] max-w-[1180px] border-[2px] border-accent px-[25px] pt-[26px] pb-[75px]'
      >
        <h2 className='text-center font-oswald text-3xl font-light tracking-[-0.035em]'>
          Работать с нами не только выгодно, но и надежно
        </h2>
        <h3 className='mx-auto mt-4 max-w-[735px] text-center text-[14px] font-light tracking-[-0.035em] text-[#676767] md:text-base'>
          Хорошее стоить дешево не может, но мы стараемся предложить товар по
          лучшей цене на рынке, при этом оптимизировать процесс выбора и заказа,
          сэкономить деньги и время клиентов.
        </h3>
        <div className='grid grid-cols-2 place-items-baseline gap-5 px-[10px] md:grid-cols-3'>
          {arr.map((item, index) => (
            <div
              key={index}
              className='mt-[50px] flex flex-col  items-center justify-center gap-1 md:flex-row'
            >
              <div className='h-[70px] w-[70px] bg-accent text-right font-oswald text-[80px] font-light leading-[70px] text-white'>
                {index + 1}
              </div>
              <div className='max-w-[280px] text-center text-[12px] md:text-left md:text-[14px]'>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
