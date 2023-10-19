import { SubmitHandler, useForm } from 'react-hook-form'
import clsx from 'clsx'
import HeatersTable from './HeatersTable'
type TFormProps = {
  phoneNumber: string
  name: string
}
const arr = [
  {
    title: 'Эффективный',
    description: 'равномерный обогрев'
  },
  {
    title: 'Комфортный и здоровый',
    description: 'микроклимат'
  },
  {
    title: 'Стильный внешний вид,',
    description: 'компактность и бесшумность'
  },
  {
    title: 'Простая интеграция в,',
    description: '"умный дом".'
  },
  {
    title: 'Возможность отопления',
    description: 'объектов с ограниченными возможностями местной сети'
  },
  {
    title: 'Сокращение затрат на закупку ',
    description: 'оборудования, монтаж и обслуживание'
  },
  {
    title: 'Сокращение ежемесячных платежей',
    description: ' за энергоресурсы в 2-4 раза'
  },
  {
    title: 'Программирование режимов',
    description: 'работы и возможность удаленного управления'
  },
  {
    title: 'Программирование режимов',
    description: 'работы и возможность удаленного управления'
  }
]

const tableData = [
  {
    maxRoomArea: 8,
    price: 6.9
  },
  {
    maxRoomArea: 12,
    price: 11.5
  },
  {
    maxRoomArea: 14,
    price: 12.65
  },
  {
    maxRoomArea: 20,
    price: 20.7
  }
]

const heaters = [
  {
    model: 'Хитстоун XC05',
    dimensions: '30x60x6',
    wattage: 0.25,
    roomArea: 'до 8',
    regularPrice: 6.9,
    preferentialPrice: 1.2,
    price: 330
  },
  {
    model: 'Хитстоун XC1',
    dimensions: '60x60x6',
    wattage: 0.4,
    roomArea: 'до 12',
    regularPrice: 11.5,
    preferentialPrice: 2,
    price: 492
  },
  {
    model: 'Хитстоун XC2',
    dimensions: '45x90x6',
    wattage: 0.45,
    roomArea: 'до 14',
    regularPrice: 12.65,
    preferentialPrice: 2.2,
    price: 540
  },
  {
    model: 'Хитстоун XC3',
    dimensions: '60x120x6',
    wattage: 0.75,
    roomArea: 'до 20',
    regularPrice: 20.7,
    preferentialPrice: 3.6,
    price: 720
  }
  // add more heaters here
]
export const HeaterAdvantagesSection = () => {
  return (
    <section className='z-10 my-14 px-3'>
      <div className='container z-10 mt-[115px] max-w-[1180px] border-[2px] border-accent px-[25px] pt-[26px] pb-[75px]'>
        <h2 className='text-center font-oswald text-3xl font-light tracking-[-0.035em]'>
          Преимущества керамогранитных обогревателей
        </h2>
        <div className='grid grid-cols-2 place-items-baseline gap-2 md:gap-5 md:px-5 lg:grid-cols-3'>
          {arr.map((item, index) => (
            <div
              key={index}
              className={clsx(
                'mt-[50px] flex flex-col items-center justify-center gap-1.5 justify-self-center lg:flex-row lg:justify-self-start',
                index === 8 && 'col-span-2 lg:col-span-1'
              )}
            >
              <div className='h-[70px] w-[70px] bg-accent text-right font-oswald text-[80px] font-light leading-[70px] text-white'>
                {index + 1}
              </div>
              <div className='flex max-w-[280px] flex-col text-[10px] md:text-[14px]'>
                <span className='text-center font-medium lg:text-left'>
                  {item.title}
                </span>
                <span className='text-center lg:text-left'>
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='container my-10'>
        <div className='flex w-full flex-col items-center justify-center gap-4'>
          <h2 className='text-center font-oswald text-3xl font-light tracking-[-0.035em]'>
            Таблица расчёта отопления
          </h2>
          <HeatersTable heaters={heaters} />
        </div>
      </div>
    </section>
  )
}
