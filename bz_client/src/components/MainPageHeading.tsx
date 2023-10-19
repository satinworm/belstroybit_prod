import clsx from 'clsx'
import { MainPageBoxNumber } from './MainPageBoxNumber'

type Props = {
  title: string
  subtitle: string
  number: string
  position: 'left' | 'right'
  className?: string
  id?: string
}

export const MainPageHeading = (props: Props) => {
  const { title, subtitle, number, position, className, id } = props

  return (
    <div
      id={id}
      className={clsx(
        'relative flex w-fit items-center gap-2 px-[5px]',
        position === 'right'
          ? '-right-[0px] ml-auto flex-row-reverse sm:-right-4 md:-right-0 lg:-right-10'
          : 'ml-none -left-[0px] flex-row sm:-left-4 ',
        className
      )}
    >
      <span className='text-[32px] font-bold uppercase text-black/5 lg:text-7xl'>
        {title}
      </span>
      <h2 className='absolute right-1 bottom-[2px] text-[12px] font-medium lg:-bottom-1 lg:right-0 lg:text-2xl'>
        {subtitle}
      </h2>
      <MainPageBoxNumber number={number} />
    </div>
  )
}
