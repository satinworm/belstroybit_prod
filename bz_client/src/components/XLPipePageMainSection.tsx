import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ConsultationModal } from './ConsultationModal'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { parsePhoneNumber, parsePhoneNumberFromString } from 'libphonenumber-js'

type TFormProps = {
  phoneNumber: string
}

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Обязательное поле')
    .test({
      name: 'phoneNumber',
      exclusive: true,
      message: 'Неправильный номер',
      // test: (value) => parsePhoneNumber(value as string, "BY").isValid(),
      test: value => {
        try {
          return parsePhoneNumber(value as string, 'BY').isValid()
        } catch {
          return false
        }
      }
    })
})
export const XLPipePageMainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<TFormProps>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber: ''
    }
  })
  const normalizePhoneNumber = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value, 'BY')
    if (!phoneNumber) return value
    return phoneNumber.formatInternational()
  }

  const onSubmit: SubmitHandler<TFormProps> = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section className='relative h-[300px] bg-xl-pipe-mobile-bg bg-cover bg-no-repeat sm:h-[400px] sm:bg-xl-pipe-bg lg:h-screen xl:h-[93vh]'>
        <div className='main-links absolute top-1/2 left-8 z-10 hidden -translate-y-1/2 flex-col gap-8 lg:flex'>
          <a href='#'>
            <img src='/icons/facebook.svg' alt='facebook' />
          </a>
          <a href='#'>
            <img src='/icons/instagram.svg' alt='instagram' />
          </a>
          <a href='#'>
            <img src='/icons/vk.svg' alt='vk' />
          </a>
        </div>
        <div className='absolute right-0 top-1/3 w-full px-3 text-right sm:top-1/3 md:px-0 lg:top-1/2 lg:-translate-y-1/2'>
          <div className='container flex flex-col-reverse items-end sm:px-4 md:flex-row md:gap-6'>
            <form
              className='ml-16 mt-12 flex w-full flex-col gap-3 lg:mt-0 lg:max-w-[300px]'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='mt-10 hidden text-dark-gray md:block'>
                <input
                  type='text'
                  placeholder='Ваш телефон'
                  className='border !border-white bg-transparent text-white placeholder-white backdrop-blur-sm'
                  {...register('phoneNumber', { required: true })}
                  onChange={e =>
                    (e.target.value = normalizePhoneNumber(e.target.value))
                  }
                />
              </div>
              <button
                className='xlButton button hidden w-full md:block'
                id='phoneButton'
                type='submit'
              >
                Получите консультацию
              </button>
              <button
                className='xlButton button w-full py-2 md:hidden'
                id='phoneButton'
                type='submit'
              >
                Получите консультацию
              </button>
            </form>
            <h1 className='ml-auto font-oswald text-3xl font-extralight leading-tight tracking-[-0.035em] text-white sm:max-w-[460px] md:text-[34px] lg:max-w-[860px]  lg:text-[54px] xl:text-[96px]'>
              Основное отопление дома от электро-водяного пола XL PIPE всего за
              3 дня без котла и радиаторов
            </h1>
          </div>
        </div>
      </section>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        phoneNumber={watch('phoneNumber')}
        accentColor={'#7C3C82'}
        inputBg={'#A5A5A5'}
      />
    </>
  )
}
