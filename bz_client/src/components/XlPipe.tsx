import { useState } from 'react'
import { usePopper } from 'react-popper'

type Props = { image: string; name: string; info: string }

export const XlPipe = (props: Props) => {
  const { image, name, info } = props

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    placement: 'right'
  })
  const [isHover, setIsHover] = useState(false)

  return (
    <div ref={setReferenceElement} className='block bg-[#e6e7e8] md:relative'>
      <span className='mb-px block whitespace-nowrap text-center text-[10px] font-medium text-[#939598] md:text-[12px]'>
        {name}
      </span>
      <div className='z-30' style={{ position: 'inherit' }}>
        <img
          src={image}
          alt={name}
          className='h-[37px] w-[95px] md:h-[53px] md:w-[188px]'
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
        />
      </div>
      {/*inset: 0px auto auto 0px;*/}
      {/*transform: translate3d(160px, -40.5px, 0);*/}
      {isHover && (
        <div
          ref={setPopperElement}
          style={{
            inset: '0px auto auto 0px'
          }}
          className='msBgPos2 md:msBg absolute z-40'
          {...attributes.popper}
        >
          <div className='z-40 block md:relative'>
            {/*<div className=' rounded-lg border border-xl-accent bg-white p-4 text-sm'>*/}
            <div className='msBg2 md:msgBg h-[95px] w-[170px] p-4 text-[10px] font-medium text-[#939598] md:w-[210px] md:text-[12px]'>
              {name}
              <div className='md mt-1 text-[10px] text-base'>{info}</div>
            </div>
            {/*<div ref={setArrowElement} style={styles.arrow} className='arrow' />*/}
          </div>
        </div>
      )}
    </div>
  )
}
