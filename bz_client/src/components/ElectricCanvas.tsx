import { useEffect, useRef } from 'react'
import { drawLine, getOffset } from '../utils/canvas'

export const ElectricCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const draw = () => {
      if (canvasRef.current) {
        const dimension = [
          document.documentElement.clientWidth,
          document.documentElement.offsetHeight
        ]
        canvasRef.current.width = dimension[0]
        canvasRef.current.height = dimension[1]

        const ctx = canvasRef.current.getContext('2d')

        if (!ctx) {
          return
        }
        const electricServicesHeading = document.querySelector<HTMLElement>(
          '#electricServicesHeading'
        )!
        const electricAboutHeading = document.querySelector<HTMLElement>(
          '#electricAboutHeading'
        )!
        const electricServiceList = document.querySelector<HTMLElement>(
          '#electricServiceList'
        )!
        const electricAboutSection = document.querySelector<HTMLElement>(
          '#electricAboutSection'
        )!
        const electricStepAdvantages = document.querySelector<HTMLElement>(
          '#ElectricStepAdvantages'
        )!

        const electricServiceListOffset = getOffset(electricServiceList)
        const electricServicesHeadingOffset = getOffset(electricServicesHeading)
        const electricAboutHeadingOffset = getOffset(electricAboutHeading)
        const electricAboutSectionOffset = getOffset(electricAboutSection)
        const electricStepAdvantagesOffset = getOffset(electricStepAdvantages)
        // drawLine(
        //   ctx,
        //   [
        //     electricServiceListOffset.left - 5000,
        //     electricServicesHeadingOffset.top
        //   ],
        //   [
        //     electricServiceListOffset.right -
        //       electricServiceListOffset.width / 8,
        //     electricServicesHeadingOffset.top
        //   ],
        //   '#141817',
        //   8
        // )
        drawLine(
          ctx,
          [
            electricStepAdvantagesOffset.right + 5000,
            electricStepAdvantagesOffset.top + 80
          ],
          [
            electricStepAdvantagesOffset.right,
            electricStepAdvantagesOffset.top + 80
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            electricStepAdvantagesOffset.left,
            electricStepAdvantagesOffset.top + 80
          ],
          [
            electricStepAdvantagesOffset.left - 40.5,
            electricStepAdvantagesOffset.top + 80
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            electricStepAdvantagesOffset.left - 40,
            electricStepAdvantagesOffset.top + 80
          ],
          [
            electricStepAdvantagesOffset.left - 40,
            electricStepAdvantagesOffset.bottom + 80
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            electricStepAdvantagesOffset.left - 40.5,
            electricStepAdvantagesOffset.bottom + 80
          ],
          [
            electricStepAdvantagesOffset.right + 200.5,
            electricStepAdvantagesOffset.bottom + 80
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            electricStepAdvantagesOffset.right + 200,
            electricStepAdvantagesOffset.bottom + 80
          ],
          [
            electricStepAdvantagesOffset.right + 200,
            electricStepAdvantagesOffset.bottom + 5000
          ],
          '#FCD638',
          2
        )

        // service list
        drawLine(
          ctx,
          [
            electricAboutSectionOffset.right - 232.5,
            electricAboutSectionOffset.top + 95
          ],
          [
            electricAboutSectionOffset.right - 232.5,
            electricAboutSectionOffset.top - 970
          ],
          '#141817',
          8.5
        )
        drawLine(
          ctx,
          [
            electricAboutSectionOffset.right - 228.1,
            electricAboutSectionOffset.top - 970
          ],
          [
            electricAboutSectionOffset.left,
            electricAboutSectionOffset.top - 970
          ],
          '#141817',
          8.5
        )
        // drawLine(
        //   ctx,
        //   [
        //     electricServiceListOffset.right - 232.5,
        //     electricServicesHeadingOffset.top - 1000
        //   ],
        //   [
        //     electricServiceListOffset.right - 232.5,
        //     electricServiceListOffset.top
        //   ],
        //   '#141817',
        //   8
        // )
      }
    }
    draw()

    setInterval(() => {
      draw()
    }, 100)
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className='pointer-events-none absolute top-0 left-0 z-[1] hidden xl:block'
    />
  )
}
