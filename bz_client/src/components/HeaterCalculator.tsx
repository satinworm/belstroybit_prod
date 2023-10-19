import { FC, useState } from 'react'
import clsx from 'clsx'

interface PriceRange {
  minArea: number
  maxArea: number
  price: number
  salePrice: number
}

interface RoomPrice {
  areaRange: [number, number]
  price: number
}

const PRICE_TABLE: PriceRange[] = [
  { minArea: 0, maxArea: 7.99, price: 6.9, salePrice: 1.2 },
  { minArea: 8, maxArea: 11.99, price: 11.5, salePrice: 2 },
  { minArea: 12, maxArea: 13.99, price: 12.65, salePrice: 2.2 },
  { minArea: 14, maxArea: 19.99, price: 20.7, salePrice: 3.6 },
  { minArea: 20, maxArea: 27.99, price: 28.8, salePrice: 4.8 },
  { minArea: 28, maxArea: 31.99, price: 32.2, salePrice: 5.6 },
  { minArea: 32, maxArea: 34.99, price: 33.5, salePrice: 5.8 },
  { minArea: 35, maxArea: 39.99, price: 39, salePrice: 7.1 },
  { minArea: 40, maxArea: Infinity, price: 47, salePrice: 8.4 }
]

const HeaterCalculator: FC = () => {
  const [numRooms, setNumRooms] = useState(1)
  const [roomAreas, setRoomAreas] = useState<number[]>([])
  const [saleType, setSaleType] = useState<'regular' | 'preferential'>(
    'preferential'
  )
  const handleNumRoomsChange = (num: number) => {
    setNumRooms(num)
    setRoomAreas(new Array(num).fill(0))
  }

  const handleAreaChange = (index: number, area: number) => {
    const newRoomAreas = [...roomAreas]
    newRoomAreas[index] = area
    setRoomAreas(newRoomAreas)
  }

  const calculateRoomPrice = (area: number) => {
    if (saleType === 'regular') {
      for (const { minArea, maxArea, price } of PRICE_TABLE) {
        if (area >= minArea && area <= maxArea) {
          return price
        }
      }
      return 0
    } else {
      for (const { minArea, maxArea, salePrice } of PRICE_TABLE) {
        if (area >= minArea && area <= maxArea) {
          return salePrice
        }
      }
      return 0
    }
  }

  const totalRoomPrice = roomAreas.reduce(
    (total, area) => total + calculateRoomPrice(area),
    0
  )

  return (
    <div className='mt-[30px] flex flex-col items-center'>
      <div className='mb-4 flex'>
        {[1, 2, 3, 4, 5].map((num, index) => (
          <div
            key={num}
            className={`mr-4 flex cursor-pointer flex-col items-center justify-center px-[7px] py-[5px] text-white transition duration-300 last:mr-0 xxs:h-[45px] xxs:w-[45px] sm:h-[60px] sm:w-[60px] lg:h-[100px] lg:w-[100px] lg:px-[15px] lg:py-[10px] ${
              num === numRooms ? 'bg-electrician-accent' : 'bg-[#D9D9D9]'
            }`}
            onClick={() => handleNumRoomsChange(num)}
          >
            <span className='font-oswald text-[16px] font-light sm:text-[20px] lg:text-[40px]'>
              {num}
            </span>
            <span className='text-[9px] font-light sm:text-[12px] lg:text-[18px]'>
              Комнат{index === 0 && 'а'}
              {index === 1 && 'ы'}
              {index === 2 && 'ы'}
              {index === 3 && 'ы'}
            </span>
          </div>
        ))}
      </div>
      <div className='my-5 flex items-center gap-5'>
        <div
          onClick={() => setSaleType('regular')}
          className='flex cursor-pointer gap-2'
        >
          <div className='font-oswald text-lg font-light'>Обычный тариф</div>
          <div
            className={clsx(
              'border border-electrician-accent p-3 transition duration-300',
              saleType === 'regular' ? 'bg-electrician-accent' : 'bg-white'
            )}
          />
        </div>
        <div
          onClick={() => setSaleType('preferential')}
          className='flex cursor-pointer gap-2'
        >
          <div className='font-oswald text-lg font-light'>Льготный тариф</div>
          <div
            className={clsx(
              'cursor-pointer border border-electrician-accent p-3 transition duration-300',
              saleType === 'preferential' ? 'bg-electrician-accent' : 'bg-white'
            )}
          />
        </div>
      </div>
      {numRooms > 0 && (
        <div
          style={{
            backgroundImage: `url("/XLPipeCalculator/${numRooms}room.svg")`
          }}
          className={`relative mx-auto flex h-[240px] w-[225px] flex-col border-2 border-electrician-accent bg-cover bg-no-repeat sm:h-[370px] sm:w-[350px] lg:h-[666px] lg:w-[621px]`}
        >
          {[...Array(numRooms)].map((_, index) => (
            <div
              key={index}
              id={`calcInput_${index + 1}`}
              className='absolute flex flex-col items-center justify-center gap-0.5 -space-y-2 md:mb-4 lg:space-y-0'
            >
              <input
                type='number'
                id={`room-${index + 1}`}
                value={roomAreas[index]}
                defaultValue={Math.floor(0).toFixed(1)}
                min={0}
                className={clsx(
                  'relative h-[25px] w-[40px] border border-electrician-accent pl-[0px] text-center text-[9px] focus-visible:outline-xl-accent sm:h-[30px] sm:w-[50px] sm:text-[12px] lg:h-[40px] lg:w-[90px] lg:border-[2px] lg:text-[18px]'
                )}
                onChange={e => handleAreaChange(index, e.target.value)}
              />
              <div>
                <label
                  htmlFor={`room-${index + 1}`}
                  className='text-[9px] font-medium text-electrician-accent sm:text-[10px] md:text-[12px] lg:text-base'
                >
                  Комната {index + 1}
                </label>
                <span className='absolute top-[7px] left-[27px] ml-1 text-[8px] sm:top-[10px] sm:left-[32px] sm:text-[9px] md:left-[38px] lg:top-[9px] lg:left-[56px] lg:text-base'>
                  м<sup>2</sup>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='mt-4 font-oswald text-[20px] font-medium text-black'>
        Приблизительная цена по{' '}
        {saleType === 'regular' ? (
          <>
            <span className={'font-medium text-electrician-accent'}>
              обычному
            </span>{' '}
            <span>тарифу </span>
          </>
        ) : (
          <>
            <span className={'font-medium text-electrician-accent'}>
              льготному
            </span>{' '}
            <span>тарифу</span>
          </>
        )}
        :{' '}
        <strong className='text-[24px] text-electrician-accent'>
          {totalRoomPrice.toFixed(0)}
        </strong>{' '}
        BYN в месяц за обогрев
      </div>
    </div>
  )
}

export default HeaterCalculator
