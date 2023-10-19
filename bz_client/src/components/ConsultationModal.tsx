import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { Fragment, useEffect, useRef } from 'react'
import { drawLine } from '../utils/canvas'
import axios from 'axios'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Simulate } from 'react-dom/test-utils'

import { parsePhoneNumberFromString, parsePhoneNumber } from 'libphonenumber-js'

type Props = {
  isOpen: boolean
  onClose: () => void
  phoneNumber?: string
  accentColor: string
  inputBg: string
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
export const ConsultationModal = (props: Props) => {
  const { isOpen, onClose, phoneNumber, accentColor, inputBg } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLDivElement>(null)
  const phoneInputRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TFormProps>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber,
      name: ''
    }
  })

  const normalizePhoneNumber = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value, 'BY')
    if (!phoneNumber) return value
    return phoneNumber.formatInternational()
  }

  useEffect(() => {
    reset({
      phoneNumber
    })
  }, [phoneNumber])

  const onSubmit = async (data: any) => {
    console.log('Uraaa', data)
    const res = await axios.post('http://localhost:3101/applications', {
      ...data
    })
    onClose()
    reset()
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
        const titleOffset = titleRef.current!.getBoundingClientRect()
        const paragraphOffset = paragraphRef.current!.getBoundingClientRect()
        const nameInputOffset = nameInputRef.current!.getBoundingClientRect()
        const phoneInputOffset = phoneInputRef.current!.getBoundingClientRect()
        const buttonOffset = buttonRef.current!.getBoundingClientRect()
        const modalOffset = modalRef.current!.getBoundingClientRect()

        drawLine(
          ctx,
          [titleOffset.left + 30, titleOffset.top],
          [titleOffset.left + 30, titleOffset.top - 20],
          accentColor
        )

        drawLine(
          ctx,
          [titleOffset.left + 30, titleOffset.top - 20],
          [modalOffset.left + modalOffset.width, titleOffset.top - 20],
          accentColor
        )

        drawLine(
          ctx,
          [titleOffset.left + 30, titleOffset.top + titleOffset.height],
          [titleOffset.left + 30, paragraphOffset.top],
          accentColor
        )

        drawLine(
          ctx,
          [titleOffset.left + 30, paragraphOffset.top + paragraphOffset.height],
          [titleOffset.left + 30, nameInputOffset.top],
          accentColor
        )

        // drawLine(
        //   ctx,
        //   [titleOffset.left + 30, nameInputOffset.top + nameInputOffset.height],
        //   [titleOffset.left + 30, phoneInputOffset.top],
        //   accentColor
        // )

        drawLine(
          ctx,
          [
            titleOffset.left + 30,
            phoneInputOffset.top + phoneInputOffset.height + 3
          ],
          [
            titleOffset.left + 30,
            phoneInputOffset.top + phoneInputOffset.height + 25
          ],
          accentColor
        )

        drawLine(
          ctx,
          [titleOffset.left + 30, buttonOffset.top + buttonOffset.height],
          [titleOffset.left + 30, buttonOffset.top + buttonOffset.height + 20],
          accentColor
        )

        drawLine(
          ctx,
          [titleOffset.left + 30, buttonOffset.top + buttonOffset.height + 20],
          [
            modalOffset.left + modalOffset.width,
            buttonOffset.top + buttonOffset.height + 20
          ],
          accentColor
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
    <Dialog open={isOpen} onClose={onClose} as='div' className='relative z-50'>
      <canvas
        ref={canvasRef}
        className='pointer-events-none fixed top-0 left-0 z-20'
      />
      <div
        className='fixed inset-0 bg-black/30 backdrop-blur-[4px]'
        aria-hidden='true'
      />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel
          className='mx-auto max-w-lg border border-black bg-white px-8 py-16'
          ref={modalRef}
        >
          <Dialog.Title ref={titleRef}>
            <span
              style={{ color: accentColor }}
              className={`text-2xl font-medium`}
            >
              Получение профессиональной консультации
            </span>
          </Dialog.Title>

          <div
            className='mt-10 mb-16 text-xs text-[#676767]'
            ref={paragraphRef}
          >
            <sup>*</sup>Для получения профессиональной консультации просто
            оставьте ваши данные и наш специалист свяжется с вами в ближайшее
            время
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex max-w-xs flex-col gap-4'
          >
            <div ref={nameInputRef}>
              <input
                type='text'
                className='text-white placeholder-white'
                style={{ backgroundColor: inputBg }}
                placeholder='Ваше имя'
                {...register('name', { required: true })}
              />
              <span className='text-xs text-red-600'>
                {errors.name?.message}
              </span>
            </div>
            <div ref={phoneInputRef}>
              <input
                type='text'
                className='text-white placeholder-white'
                placeholder='Ваш телефон'
                style={{ backgroundColor: inputBg }}
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
              type='submit'
              className='primaryButton button mt-2'
              ref={buttonRef}
              style={{ backgroundColor: accentColor }}
            >
              Получить консультацию
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
