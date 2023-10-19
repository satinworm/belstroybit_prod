import { useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

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
  {
    name: 'Сантехнические работы',
    subtypes: ['Subtype 8A', 'Subtype 8B', 'Subtype 8C']
  },
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

export const Services = (props: Props) => {
  const { close } = props
  const [selectedService, setSelectedService] = useState('Электрические работы')
  const handleServiceChange = event => {
    setSelectedService(event.target.value)
  }
  return (
    <div id='services' className='flex gap-5 border-t-2 border-black'>
      <div className='w-fit border-r-2 border-black py-4'>
        <ul className='w-72 space-y-1 transition-all duration-300'>
          {serviceCategories.map((category, index) => (
            <li
              className={clsx(
                'w-fit border-b-2 transition-all duration-300',
                selectedService === category.name
                  ? 'border-black'
                  : 'border-transparent'
              )}
              key={index}
            >
              <button
                className={clsx(
                  'py-1 text-left text-[16px] leading-[19.5px] transition-all duration-300',
                  selectedService === category.name &&
                    'text-[20px] font-medium leading-[24px]'
                )}
                type='button'
                value={category.name}
                onClick={handleServiceChange}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full p-3'>
        {selectedService && (
          <div>
            <div className='text-center text-lg font-semibold'>
              {selectedService}:
            </div>
            <ul className='mt-4'>
              {serviceCategories
                .find(category => category.name === selectedService)
                .subtypes.map((subtype, index) => (
                  <li key={index} className='text-base'>
                    <NavLink onClick={close} to={`/${subtype.link}`}>
                      {subtype.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
