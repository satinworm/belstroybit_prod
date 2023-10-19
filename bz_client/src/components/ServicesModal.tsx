import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import { drawLine } from '../utils/canvas'
import axios from 'axios'
import * as yup from 'yup'
import { parsePhoneNumber, parsePhoneNumberFromString } from 'libphonenumber-js'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, NavLink } from 'react-router-dom'

type Props = {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  links?: string[]
}

type TFormProps = {
  phoneNumber: string
  name: string
}
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Обязательное поле')
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, 'Имя не должно содержать цифр'),
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

export const ServicesModal = (props: Props) => {
  const { isOpen, onClose, title, description, links } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TFormProps>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber: '',
      name: ''
    }
  })
  const normalizePhoneNumber = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value, 'BY')
    if (!phoneNumber) return value
    return phoneNumber.formatInternational()
  }

  const onSubmit = async (data: any) => {
    console.log(data, title)
    const res = await axios.post('http://localhost:3101/applications', {
      ...data,
      title
    })
    onClose()
    reset()
  }
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const draw = () => {
      if (canvasRef.current) {
        const dimension = [
          document.documentElement.clientWidth,
          document.documentElement.offsetHeight
        ]
        canvasRef.current.width = dimension[0]
        canvasRef.current.height = dimension[1]

        const ctx = canvasRef.current.getContext('2d')
        if (!ctx) {
          return
        }
        const modalOffset = modalRef.current!.getBoundingClientRect()
        const descriptionOffset =
          descriptionRef.current!.getBoundingClientRect()
        const nameInputOffset = nameInputRef.current!.getBoundingClientRect()
        const buttonOffset = buttonRef.current!.getBoundingClientRect()

        drawLine(
          ctx,
          [descriptionOffset.left + 20, descriptionOffset.top],
          [descriptionOffset.left + 20, descriptionOffset.top - 20]
        )

        drawLine(
          ctx,
          [descriptionOffset.left + 20, descriptionOffset.top - 20],
          [modalOffset.left + modalOffset.width, descriptionOffset.top - 20]
        )

        drawLine(
          ctx,
          [
            descriptionOffset.left + 20,
            descriptionOffset.top + descriptionOffset.height
          ],
          [
            descriptionOffset.left + 20,
            buttonOffset.top + buttonOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            descriptionOffset.left + 20,
            buttonOffset.top + buttonOffset.height / 2
          ],
          [buttonOffset.left - 20, buttonOffset.top + buttonOffset.height / 2]
        )

        drawLine(
          ctx,
          [buttonOffset.left - 20, buttonOffset.top + buttonOffset.height / 2],
          [
            buttonOffset.left - 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left - 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ],
          [buttonOffset.left, nameInputOffset.top + nameInputOffset.height / 2]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left + buttonOffset.width,
            nameInputOffset.top + nameInputOffset.height / 2
          ],
          [
            buttonOffset.left + buttonOffset.width + 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left + buttonOffset.width + 20,
            nameInputOffset.top + nameInputOffset.height / 2
          ],
          [
            buttonOffset.left + buttonOffset.width + 20,
            buttonOffset.top + buttonOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            buttonOffset.left + buttonOffset.width + 20,
            buttonOffset.top + buttonOffset.height / 2
          ],
          [
            modalOffset.left + modalOffset.width,
            buttonOffset.top + buttonOffset.height / 2
          ]
        )
      }
    }

    draw()

    setInterval(() => {
      draw()
    }, 100)
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <canvas
        ref={canvasRef}
        className='pointer-events-none fixed top-0 left-0 z-20 hidden md:block'
      />
      <div className='fixed inset-0 bg-black/70' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel
          className='mx-auto max-w-4xl border border-black bg-white px-14 py-8'
          ref={modalRef}
        >
          <Dialog.Title className='text-center text-2xl font-medium'>
            {title}
          </Dialog.Title>

          <div className='relative mt-7' ref={descriptionRef}>
            {description}
            {links && (
              <div className='absolute left-7 mt-10 flex items-baseline gap-6'>
                <div className='mt-3 text-[26px] font-medium text-black'>
                  Разделы:
                </div>
                <ul className='list-disc'>
                  {links.map((data, index) => (
                    <li className='font-light hover:underline' key={index}>
                      <NavLink onClick={handleScrollToTop} to={`${data.link}`}>
                        {data.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <form
            className='ml-auto flex w-full max-w-[300px] flex-col gap-3'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='mt-10 flex flex-col gap-2 text-dark-gray'>
              <span className='block max-w-[200px] text-xs'>
                <sup>*</sup>Получить консультацию вы можете уже сейчас просто
                оставив заявку в один клик
              </span>

              <div ref={nameInputRef}>
                <input
                  type='text'
                  placeholder='Ваше имя'
                  className='bg-[#EEEEEE]'
                  {...register('name', { required: true })}
                />
                <span className='text-xs text-red-600'>
                  {errors.name?.message}
                </span>
              </div>
              <input
                type='text'
                placeholder='Ваш телефон'
                className='bg-[#EEEEEE]'
                {...register('phoneNumber', { required: true })}
                onChange={e =>
                  (e.target.value = normalizePhoneNumber(e.target.value))
                }
              />
              <span className='text-xs text-red-600'>
                {errors.phoneNumber?.message}
              </span>
            </div>

            <button
              className='button primaryButton w-full'
              id='phoneButton'
              type='submit'
              ref={buttonRef}
            >
              Получите консультацию
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
