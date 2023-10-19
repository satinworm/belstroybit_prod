type Props = {
  width?: number
  height?: number
}

export const BurgerMenu = (props: Props) => {
  const { width, height } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='38'
        height='38'
        rx='2'
        stroke='black'
        strokeWidth='2'
      />
      <line
        x1='7'
        y1='8'
        x2='33'
        y2='8'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <line
        x1='15'
        y1='19'
        x2='33'
        y2='19'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <line
        x1='7'
        y1='30'
        x2='33'
        y2='30'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
