import clsx from 'clsx'

type Props = {
  idx: number
  index: number
  title: string
  image: string
  span: string
}

export const WorkStep = (props: Props) => {
  const { index, title, image, span, idx } = props
  const mobile = window.innerWidth < 540

  return (
    <li
      className={clsx(
        'mx-auto flex min-w-[100px] max-w-[100px] flex-col items-center justify-center gap-x-[0px] gap-y-3 md:max-w-[400px] lg:gap-6',
        mobile && span
      )}
    >
      <div className='relative'>
        <h4 className='min-w-[110px] max-w-[110px] text-center text-[11px] font-medium text-black lg:max-w-[400px] lg:text-base'>
          {title}
        </h4>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-trispace text-[62px] font-light text-black/10 lg:text-8xl'>
          0{index}
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]'
      />
    </li>
  )
}
