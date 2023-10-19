type Props = {
  width?: number
  height?: number
}

export const BurgerMenuElectric = (props: Props) => {
  const { width, height } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.375'
        y='0.375'
        width='29.25'
        height='29.25'
        rx='3.375'
        fill='white'
        stroke='#FCD638'
        strokeWidth='0.75'
      />
      <line
        x1='5.25'
        y1='6.75'
        x2='26.25'
        y2='6.75'
        stroke='#FCD638'
        strokeWidth='1.5'
      />
      <line
        x1='11.25'
        y1='14.25'
        x2='26.25'
        y2='14.25'
        stroke='#FCD638'
        strokeWidth='1.5'
      />
      <line
        x1='5.25'
        y1='21.75'
        x2='26.25'
        y2='21.75'
        stroke='#FCD638'
        strokeWidth='1.5'
      />
    </svg>
  )
}
