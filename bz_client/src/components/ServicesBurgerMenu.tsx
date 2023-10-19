import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'

type Props = {
  close: () => void
}
export const serviceCategories = [
  // {
  //   name: 'Земляные работы',
  //   subtypes: ['Земляные работы', 'Земляные работы 1', 'Земляные работы 2']
  // },
  // {
  //   name: 'Бетонные работы – фундамент',
  //   subtypes: ['Subtype 2A', 'Subtype 2B', 'Subtype 2C']
  // },
  // {
  //   name: 'Возведение стен',
  //   subtypes: ['Subtype 3A', 'Subtype 3B', 'Subtype 3C']
  // },
  // {
  //   name: 'Устройство крыши',
  //   subtypes: ['Subtype 4A', 'Subtype 4B', 'Subtype 4C']
  // },
  // {
  //   name: 'Установка окон',
  //   subtypes: ['Subtype 5A', 'Subtype 5B', 'Subtype 5C']
  // },
  // {
  //   name: 'Чычерновые работы',
  //   subtypes: ['Subtype 6A', 'Subtype 6B', 'Subtype 6C']
  // },
  {
    name: 'Электрические работы',
    subtypes: [
      { name: 'XL Pipe', link: 'electrical-works/xl-pipe' },
      {
        name: 'Услуги электрика',
        link: 'electrical-works/ElectricianServices'
      },
      { name: 'Обогреватели', link: 'electrical-works/Heaters' }
    ]
  },
  // {
  //   name: 'Сантехнические работы',
  //   subtypes: ['Subtype 8A', 'Subtype 8B', 'Subtype 8C']
  // },
  // {
  //   name: 'Отделочные работы',
  //   subtypes: ['Subtype 9A', 'Subtype 9B', 'Subtype 9C']
  // },
  // {
  //   name: 'Облицовка',
  //   subtypes: ['Subtype 10A', 'Subtype 10B', 'Subtype 10C']
  // },
  // {
  //   name: 'Установка межкомнатных дверей',
  //   subtypes: ['Subtype 11A', 'Subtype 11B', 'Subtype 11C']
  // },
  // {
  //   name: 'Укладка тротуарной плитки',
  //   subtypes: ['Subtype 12A', 'Subtype 12B', 'Subtype 12C']
  // }
]

export const ServicesBurgerMenu = (props: Props) => {
  const { close, handleClick } = props
  const [selectedService, setSelectedService] = useState('')
  const handleServiceChange = event => {
    setSelectedService(event.target.value)
  }
  return (
    <div id='services' className='flex overflow-hidden border-black'>
      <Popover className='w-full border-black py-4'>
        {({ open, close }) => (
          <ul className='space-y-1 transition-all duration-300'>
            {serviceCategories.map((category, index) => (
              <>
                <Popover.Button
                  className={clsx(
                    'flex w-fit flex-col border-b-[1.5px] transition-all duration-300',
                    selectedService === category.name
                      ? 'border-white'
                      : 'border-transparent'
                  )}
                  key={index}
                >
                  <button
                    className={clsx(
                      'whitespace-nowrap py-1 text-left text-[14px] leading-[19.5px] text-white transition-all duration-200',
                      selectedService === category.name && 'font-semibold'
                    )}
                    type='button'
                    value={category.name}
                    onClick={handleServiceChange}
                  >
                    {category.name}
                  </button>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition duration-500'
                  enterFrom='opacity-0 -translate-y-[50%]'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition duration-500'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 -translate-y-[80%]'
                >
                  <Popover.Panel>
                    {selectedService === category.name && (
                      <div>
                        <span>
                          {category.subtypes.map((subtype, index) => (
                            <li key={index} className='pl-4 text-sm text-white'>
                              <NavLink
                                onClick={() => {
                                  close()
                                  handleClick()
                                }}
                                to={`/${subtype.link}`}
                              >
                                {subtype.name}
                              </NavLink>
                            </li>
                          ))}
                        </span>
                      </div>
                    )}
                  </Popover.Panel>
                </Transition>
              </>
            ))}
          </ul>
        )}
      </Popover>
    </div>
  )
}
