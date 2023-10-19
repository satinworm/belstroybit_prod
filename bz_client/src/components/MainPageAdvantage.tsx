type Props = {
  title: string
  image: string
  description: string
}

export const MainPageAdvantage = (props: Props) => {
  const { title, image, description } = props

  return (
    <li className='flex flex-col items-center gap-3 text-center lg:gap-6'>
      <img src={image} alt={title} className='h-[80px] w-[80px] flex-none' />
      <h5 className='text-lg lg:text-2xl '>{title}</h5>
      <div className='mt-auto text-xs text-[#A5A5A5] '>{description}</div>
    </li>
  )
}
