import clsx from 'clsx'

type Props = {
  number: string
  className?: string
  contrast?: boolean
  id?: string
}

export const MainPageBoxNumber = (props: Props) => {
  const { number, className, contrast, id } = props

  return (
    <div
      id={id}
      className={clsx(
        ' relative h-[15px] w-[15px] overflow-hidden text-lg font-medium font-bold lg:h-[30px] lg:w-[30px]',
        contrast ? 'bg-white text-black' : 'bg-black  text-white',
        className
      )}
    >
      <span className='absolute -bottom-2.5 right-0 text-[14px] lg:text-[18px]'>
        {number}
      </span>
    </div>
  )
}
