import { useEffect, useRef } from 'react'
import { drawLine, getOffset } from '../utils/canvas'
import { createLogger } from 'vite'
import { XLPipePageSystemSection } from './XLPipePageSystemSection'

export const XLPipeCanvas = () => {
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
        const XLPipePageSystemSection = document.querySelector<HTMLElement>(
          '#XLPipePageSystemSection'
        )!
        const XLPipeCalculatorSection = document.querySelector<HTMLElement>(
          '#XLPipeCalculatorSection'
        )

        const XLPipePageSystemSectionOffset = getOffset(XLPipePageSystemSection)
        const XLPipeCalculatorSectionOffset = getOffset(XLPipeCalculatorSection)
        drawLine(
          ctx,
          [
            XLPipePageSystemSectionOffset.left,
            XLPipePageSystemSectionOffset.top + 214
            // XLPipePageSystemSectionOffset.height / 3.39
          ],
          [
            XLPipePageSystemSectionOffset.left +
              XLPipePageSystemSectionOffset.width / 2 +
              500,
            XLPipePageSystemSectionOffset.top + 214
            // XLPipePageSystemSectionOffset.height / 3.39
          ],
          '#7C3C82',
          2
        )
        drawLine(
          ctx,
          [
            XLPipePageSystemSectionOffset.left,
            XLPipePageSystemSectionOffset.top +
              XLPipePageSystemSectionOffset.height -
              22
          ],
          [
            XLPipePageSystemSectionOffset.left +
              XLPipePageSystemSectionOffset.width / 2 +
              500,
            XLPipePageSystemSectionOffset.top +
              XLPipePageSystemSectionOffset.height -
              22
          ],
          '#7C3C82',
          2
        )
        drawLine(
          ctx,

          [
            XLPipePageSystemSectionOffset.left +
              XLPipePageSystemSectionOffset.width / 2 +
              500,
            XLPipePageSystemSectionOffset.top + 213
          ],
          [
            XLPipePageSystemSectionOffset.left +
              XLPipePageSystemSectionOffset.width / 2 +
              500,
            XLPipePageSystemSectionOffset.top + 214 + 573
          ],
          '#7C3C82',
          2
        )
        drawLine(
          ctx,
          [
            XLPipeCalculatorSectionOffset.left - 40,
            XLPipeCalculatorSectionOffset.top + 150
          ],
          [
            XLPipeCalculatorSectionOffset.left,
            XLPipeCalculatorSectionOffset.top + 150
          ],
          '#7C3C82',
          2
        )
        drawLine(
          ctx,
          [
            XLPipeCalculatorSectionOffset.left - 40,
            XLPipeCalculatorSectionOffset.top + 150
          ],
          [
            XLPipeCalculatorSectionOffset.left - 40,
            XLPipeCalculatorSectionOffset.bottom + 40
          ],
          '#7C3C82',
          2
        )
        drawLine(
          ctx,
          [
            XLPipeCalculatorSectionOffset.left - 40,
            XLPipeCalculatorSectionOffset.bottom + 40
          ],
          [
            XLPipeCalculatorSectionOffset.right + 220,
            XLPipeCalculatorSectionOffset.bottom + 40
          ],
          '#7C3C82',
          2
        )
        drawLine(
          ctx,
          [
            XLPipeCalculatorSectionOffset.right + 220,
            XLPipeCalculatorSectionOffset.bottom + 40
          ],
          [
            XLPipeCalculatorSectionOffset.right + 220,
            XLPipeCalculatorSectionOffset.bottom + 1000
          ],
          '#7C3C82',
          2
        )
        drawLine(
          ctx,
          [
            XLPipeCalculatorSectionOffset.right,
            XLPipeCalculatorSectionOffset.top + 150
          ],
          [
            XLPipeCalculatorSectionOffset.right + 5000,
            XLPipeCalculatorSectionOffset.top + 150
          ],
          '#7C3C82',
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
      className='pointer-events-none absolute top-0 left-0 z-20 hidden lg:block'
    />
  )
}
