import { useEffect, useRef } from 'react'
import { drawLine, getOffset } from '../utils/canvas'

export const HeaterCanvas = () => {
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
        const HeaterSystemInfo = document.querySelector<HTMLElement>(
          '#HeaterSystemInfoSection'
        )!
        const HeaterSystemInfoOffset = getOffset(HeaterSystemInfo)

        const HeaterSystemInfoFirstBlock = document.querySelector<HTMLElement>(
          '#HeaterSystemInfoFirstBlock'
        )!
        const HeaterSystemInfoFirstBlockOffset = getOffset(
          HeaterSystemInfoFirstBlock
        )
        const HeaterScopeSection = document.querySelector<HTMLElement>(
          '#HeaterScopeSection'
        )!
        const HeaterScopeSectionOffset = getOffset(HeaterScopeSection)

        const HeaterScopeSectionTextBlock = document.querySelector<HTMLElement>(
          '#HeaterScopeSectionTextBlock'
        )!
        const HeaterScopeSectionTextBlockOffset = getOffset(
          HeaterScopeSectionTextBlock
        )
        const HeaterCalculatorSection = document.querySelector<HTMLElement>(
          '#HeaterCalculatorSection'
        )!
        const HeaterCalculatorSectionOffset = getOffset(HeaterCalculatorSection)

        drawLine(
          ctx,
          [HeaterSystemInfoOffset.right, HeaterSystemInfoOffset.top + 1],
          [
            HeaterSystemInfoFirstBlockOffset.left +
              HeaterSystemInfoFirstBlockOffset.width / 10,
            HeaterSystemInfoOffset.top + 1
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [
            HeaterSystemInfoFirstBlockOffset.left +
              HeaterSystemInfoFirstBlockOffset.width / 10,
            HeaterSystemInfoOffset.top + 1
          ],
          [
            HeaterSystemInfoFirstBlockOffset.left +
              HeaterSystemInfoFirstBlockOffset.width / 10,
            HeaterSystemInfoOffset.top + HeaterSystemInfoOffset.height / 10
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [HeaterSystemInfoOffset.right, HeaterSystemInfoOffset.bottom - 1],
          [
            HeaterSystemInfoFirstBlockOffset.left +
              HeaterSystemInfoFirstBlockOffset.width / 10,
            HeaterSystemInfoOffset.bottom - 1
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [
            HeaterSystemInfoFirstBlockOffset.left +
              HeaterSystemInfoFirstBlockOffset.width / 10,
            HeaterSystemInfoOffset.bottom - 1
          ],
          [
            HeaterSystemInfoFirstBlockOffset.left +
              HeaterSystemInfoFirstBlockOffset.width / 10,
            HeaterSystemInfoOffset.bottom -
              1 -
              HeaterSystemInfoOffset.height / 4
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [HeaterScopeSectionOffset.left - 5000, HeaterScopeSectionOffset.top],
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.top
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [
            HeaterScopeSectionOffset.left - 5000,
            HeaterScopeSectionOffset.bottom
          ],
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.bottom
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.bottom
          ],
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.bottom - 20
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.top
          ],
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.top + 30
          ],
          '#676767',
          1.5
        )
        drawLine(
          ctx,
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.top +
              HeaterScopeSectionOffset.height / 2 +
              10
          ],
          [
            HeaterScopeSectionTextBlockOffset.left +
              HeaterScopeSectionTextBlockOffset.width * 0.65,
            HeaterScopeSectionOffset.top +
              HeaterScopeSectionOffset.height / 2 +
              80
          ],
          '#676767',
          1.5
        )

        drawLine(
          ctx,
          [
            HeaterCalculatorSectionOffset.left - 40,
            HeaterCalculatorSectionOffset.top + 150
          ],
          [
            HeaterCalculatorSectionOffset.left,
            HeaterCalculatorSectionOffset.top + 150
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            HeaterCalculatorSectionOffset.left - 40,
            HeaterCalculatorSectionOffset.top + 150
          ],
          [
            HeaterCalculatorSectionOffset.left - 40,
            HeaterCalculatorSectionOffset.bottom + 40
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            HeaterCalculatorSectionOffset.left - 40,
            HeaterCalculatorSectionOffset.bottom + 40
          ],
          [
            HeaterCalculatorSectionOffset.right + 220,
            HeaterCalculatorSectionOffset.bottom + 40
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            HeaterCalculatorSectionOffset.right + 220,
            HeaterCalculatorSectionOffset.bottom + 40
          ],
          [
            HeaterCalculatorSectionOffset.right + 220,
            HeaterCalculatorSectionOffset.bottom + 1000
          ],
          '#FCD638',
          2
        )
        drawLine(
          ctx,
          [
            HeaterCalculatorSectionOffset.right,
            HeaterCalculatorSectionOffset.top + 150
          ],
          [
            HeaterCalculatorSectionOffset.right + 5000,
            HeaterCalculatorSectionOffset.top + 150
          ],
          '#FCD638',
          2
        )
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
      className='pointer-events-none absolute top-0 left-0 z-[1]'
    />
  )
}
