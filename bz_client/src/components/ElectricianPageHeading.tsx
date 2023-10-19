import clsx from 'clsx'
import { MainPageBoxNumber } from './MainPageBoxNumber'

type Props = {
  title: string
  subtitle?: string
  number: string
  position: 'left' | 'right'
  className?: string
  id?: string
}

export const ElectricianPageHeading = (props: Props) => {
  const { title, subtitle, number, position, className, id } = props

  return (
    <div
      id={id}
      className={clsx(
        'relative z-10 flex w-fit items-center gap-2',
        position === 'right'
          ? '-right-[0px] ml-auto flex-row-reverse sm:-right-4 md:-right-0 lg:-right-10'
          : 'ml-none -left-[0px] flex-row sm:left-[1rem]',
        className
      )}
    >
      <span className='text-[32px] font-bold uppercase text-black/5 sm:text-[38px] md:text-[44px] lg:text-7xl'>
        {title}
      </span>
      <h2 className='absolute left-[20px] bottom-[2px] whitespace-nowrap text-[12px] font-medium sm:text-[16px] md:text-[18px] lg:-bottom-1 lg:left-[5rem] lg:text-2xl'>
        {subtitle}
      </h2>
    </div>
  )
}
