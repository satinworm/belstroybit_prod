import React from 'react'
import classNames from 'classnames'

interface Heater {
  model: string
  dimensions: string
  wattage: number
  roomArea: number
  regularPrice: number
  preferentialPrice: number | null
  price: number
}

interface Props {
  heaters: Heater[]
}
const HeatersTable = ({ heaters }: Props) => {
  return (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
          >
            #
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
          >
            Модель
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500'
          >
            Размеры обогревателя в см
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500'
          >
            Мощность
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500'
          >
            Площадь помещения
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500'
          >
            Цена по обычному тарифу за 1 месяц (при работе 4ч в день)
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500'
          >
            Цена по льготному тарифу за 1 месяц (при работе 4ч в день)
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500'
          >
            Цена обогревателя
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 bg-white'>
        {heaters.map((heater, index) => (
          <tr key={index}>
            <td className='whitespace-nowrap  px-6 py-4'>{index + 1}</td>
            <td className='whitespace-nowrap px-6 py-4'>{heater.model}</td>
            <td className='whitespace-nowrap px-6 py-4'>{heater.dimensions}</td>
            <td className='whitespace-nowrap px-6 py-4'>
              {heater.wattage} кВт
            </td>
            <td className='whitespace-nowrap px-6 py-4'>
              {heater.roomArea}м<sup>2</sup>
            </td>
            <td
              className={classNames(
                'whitespace-nowrap px-6 py-4 text-gray-900'
              )}
            >
              {heater.regularPrice}
            </td>
            <td className='whitespace-nowrap px-6 py-4'>
              {heater.preferentialPrice || '-'}
            </td>
            <td className='whitespace-nowrap px-6 py-4'>{heater.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default HeatersTable
