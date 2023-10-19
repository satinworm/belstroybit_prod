import { FC, useState } from 'react'
import clsx from 'clsx'

interface PriceRange {
  minArea: number
  maxArea: number
  price: number
}

interface RoomPrice {
  areaRange: [number, number]
  price: number
}

const PRICE_TABLE: PriceRange[] = [
  { minArea: 1, maxArea: 5.5, price: 209 },
  { minArea: 5.6, maxArea: 8.3, price: 418 },
  { minArea: 8.4, maxArea: 11.1, price: 627 },
  { minArea: 11.2, maxArea: 13.9, price: 836 },
  { minArea: 14, maxArea: 16.7, price: 1046 },
  { minArea: 16.8, maxArea: 19.5, price: 1256 },
  { minArea: 19.6, maxArea: 22.3, price: 1444 },
  { minArea: 22.4, maxArea: 25.1, price: 1626 },
  { minArea: 25.2, maxArea: 27.9, price: 1802 },
  { minArea: 28, maxArea: 33.5, price: 1928 },
  { minArea: 33.6, maxArea: Infinity, price: 2150 }
]

const Calculator: FC = () => {
  const [numRooms, setNumRooms] = useState(1)
  const [roomAreas, setRoomAreas] = useState<number[]>([])

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
    for (const { minArea, maxArea, price } of PRICE_TABLE) {
      if (area >= minArea && area <= maxArea) {
        return price
      }
    }
    return 0
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
              num === numRooms ? 'bg-xl-accent' : 'bg-[#D9D9D9]'
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
      {numRooms > 0 && (
        <div
          style={{
            backgroundImage: `url("/XLPipeCalculator/${numRooms}room.svg")`
          }}
          className={`relative mx-auto flex h-[240px] w-[225px] flex-col border-2 border-xl-accent bg-cover bg-no-repeat sm:h-[370px] sm:w-[350px] lg:h-[666px] lg:w-[621px]`}
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
                  'relative h-[25px] w-[40px] border border-[#7C3C82] pl-[0px] text-center text-[9px] focus-visible:outline-xl-accent sm:h-[30px] sm:w-[50px] sm:text-[12px] lg:h-[40px] lg:w-[90px] lg:border-[2px] lg:text-[18px]'
                )}
                onChange={e => handleAreaChange(index, e.target.value)}
              />
              <div>
                <label
                  htmlFor={`room-${index + 1}`}
                  className='text-[9px] font-medium text-xl-accent sm:text-[10px] md:text-[12px] lg:text-base'
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

      {/*<div className='mb-4'>*/}
      {/*  {numRooms && (*/}
      {/*    <img*/}
      {/*      src={`/XLPipeCalculator/${numRooms}room.svg`}*/}
      {/*      className='h-[425px] w-[400px]'*/}
      {/*      alt='1 room'*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</div>*/}
      <div className='mt-4 text-[18px] font-medium text-black'>
        Приблизительная цена:{' '}
        <strong className='text-[24px] text-xl-accent'>
          {totalRoomPrice.toFixed(0)}
        </strong>{' '}
        BYN
      </div>
    </div>
  )
}

export default Calculator
