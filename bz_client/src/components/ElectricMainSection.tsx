import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ConsultationModal } from './ConsultationModal'

type TFormProps = {
  phoneNumber: string
}

export const ElectricMainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, handleSubmit, watch } = useForm<TFormProps>({
    defaultValues: {
      phoneNumber: ''
    }
  })

  const onSubmit: SubmitHandler<TFormProps> = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section className='relative h-[280px] bg-electrician-bg bg-cover bg-no-repeat sm:h-[400px] lg:h-[90vh]'>
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
        <div className='absolute top-1/2 right-0 w-full -translate-y-1/2 text-right'>
          <div className='container flex flex-col-reverse items-end px-3 sm:px-4 md:flex-row'>
            <form
              className='ml-16 flex w-full flex-col gap-3 lg:max-w-[300px]'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='mt-10 text-dark-gray'>
                <input
                  type='text'
                  placeholder='Ваш телефон'
                  className='border !border-white bg-transparent text-white placeholder-white backdrop-blur-sm'
                  {...register('phoneNumber', { required: true })}
                />
              </div>
              <button
                className='electricianButton button w-full'
                id='phoneButton'
                type='submit'
              >
                Получить консультацию
              </button>
            </form>
            <h1 className='ml-auto max-w-[250px] font-oswald text-2xl font-extralight leading-normal tracking-[-0.035em] text-white sm:max-w-[460px] md:max-w-[800px] md:text-[34px] lg:text-[90px]'>
              Услуги электрика в Гродно под ключ и с гарантией качества
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
        accentColor={'#FCD638'}
        inputBg={'#A5A5A5'}
      />
    </>
  )
}
