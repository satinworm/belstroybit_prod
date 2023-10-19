import { useEffect, useRef } from 'react'
import { drawLine, getOffset } from '../utils/canvas'
import { createLogger } from 'vite'

export const MainPageCanvasMobile = () => {
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

        const servicesSectionHeading =
          document.querySelector<HTMLElement>('#servicesHeading')!

        const services = document.querySelector<HTMLElement>('#services')!
          ? document.querySelector<HTMLElement>('#services')!
          : null
        const servicesSection = document.querySelector<HTMLElement>(
          'section#servicesSection'
        )!
        const aboutSection = document.querySelector<HTMLElement>(
          'section#aboutSection'
        )!
        const aboutHeading =
          document.querySelector<HTMLElement>('#aboutHeading>h2')!

        const schemeSectionHeading =
          document.querySelector<HTMLElement>('#schemeHeading')!
        const portfolioHeading =
          document.querySelector<HTMLElement>('#portfolioHeading')!
        const portfolioList =
          document.querySelector<HTMLElement>('#portfolioList')!
        const moreProjectsButton =
          document.querySelector<HTMLElement>('#moreProjects')!
        const phoneContainer =
          document.querySelector<HTMLElement>('#phoneContainer2')!

        const phoneSection =
          document.querySelector<HTMLElement>('#phoneSection')!

        const phoneNumber =
          document.querySelector<HTMLElement>('#phoneNumber2')!

        const phoneHeading =
          document.querySelector<HTMLElement>('#phoneHeading')!

        const phoneButton = document.querySelector<HTMLElement>('#phoneButton')!

        const advantagesSection =
          document.querySelector<HTMLElement>('#advantagesSection')!

        const advantagesHeading =
          document.querySelector<HTMLElement>('#advantagesHeading')!
        const aboutText = document.querySelector<HTMLElement>('#aboutText')!

        const footer = document.querySelector<HTMLElement>('footer')!
        const footerContacts =
          document.querySelector<HTMLElement>('#footerContacts')!

        const servicesOffset = services ? getOffset(services) : null
        const servicesSectionOffset = getOffset(servicesSection)
        const servicesHeadingOffset = getOffset(servicesSectionHeading)
        const aboutSectionOffset = getOffset(aboutSection)
        const aboutHeadingOffset = getOffset(aboutHeading)
        const schemeHeadingOffset = getOffset(schemeSectionHeading)
        const portfolioHeadingOffset = getOffset(portfolioHeading)
        const portfolioListOffset = getOffset(portfolioList)
        const moreProjectsButtonOffset = getOffset(moreProjectsButton)
        const phoneContainerOffset = getOffset(phoneContainer)

        const phoneSectionOffset = getOffset(phoneSection)
        const phoneNumberOffset = getOffset(phoneNumber)
        const phoneHeadingOffset = getOffset(phoneHeading)
        const phoneButtonOffset = getOffset(phoneButton)

        const advantagesSectionOffset = getOffset(advantagesSection)
        const advantagesHeadingOffset = getOffset(advantagesHeading)
        const aboutTextOffset = getOffset(aboutText)

        const footerOffset = getOffset(footer)
        const footerContactsOffset = getOffset(footerContacts)

        drawLine(
          ctx,
          [
            servicesHeadingOffset.right,
            servicesHeadingOffset.top + servicesHeadingOffset.height / 2
          ],
          [
            aboutHeadingOffset.left,
            servicesSectionOffset.top + servicesHeadingOffset.height / 2
          ],
          '#676767'
        )
        drawLine(
          ctx,
          [
            aboutHeadingOffset.left,
            servicesSectionOffset.top + servicesHeadingOffset.height / 2
          ],
          [aboutHeadingOffset.left, aboutHeadingOffset.top - 20],
          '#676767'
        )

        drawLine(
          ctx,
          [aboutHeadingOffset.left - 60, aboutHeadingOffset.top - 2],
          [aboutTextOffset.left, aboutHeadingOffset.top - 2],
          '#676767'
        )
        drawLine(
          ctx,
          [aboutTextOffset.left, aboutHeadingOffset.top - 2],
          [aboutTextOffset.left, schemeHeadingOffset.top],
          '#676767'
        )
        drawLine(
          ctx,
          [
            schemeHeadingOffset.right,
            schemeHeadingOffset.top + schemeHeadingOffset.height / 2
          ],
          [
            portfolioHeadingOffset.right - 20,
            schemeHeadingOffset.top + schemeHeadingOffset.height / 2
          ],
          '#676767'
        )
        drawLine(
          ctx,
          [
            portfolioHeadingOffset.right - 20,
            schemeHeadingOffset.top + schemeHeadingOffset.height / 2
          ],
          [portfolioHeadingOffset.right - 20, portfolioHeadingOffset.top],
          '#676767'
        )
        drawLine(
          ctx,
          [
            portfolioHeadingOffset.left,
            portfolioHeadingOffset.top + portfolioHeadingOffset.height / 2
          ],
          [
            portfolioHeadingOffset.left - 5000,
            portfolioHeadingOffset.top + portfolioHeadingOffset.height / 2
          ],
          '#676767'
        )
        drawLine(
          ctx,
          [
            phoneHeadingOffset.left - 5000,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          [
            phoneHeadingOffset.left,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          '#676767'
        )
        drawLine(
          ctx,
          [
            phoneHeadingOffset.right,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          [
            phoneButtonOffset.right + 10,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          '#676767'
        )
        drawLine(
          ctx,
          [
            phoneButtonOffset.right + 10,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          [
            phoneButtonOffset.right + 10,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ],
          '#676767',
          1
        )
        drawLine(
          ctx,
          [
            phoneButtonOffset.right + 10,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ],
          [
            phoneButtonOffset.left - 5000,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ],
          '#676767',
          1
        )
        drawLine(
          ctx,
          [
            advantagesHeadingOffset.left - 1000,
            advantagesHeadingOffset.top + advantagesHeadingOffset.height / 2
          ],
          [
            advantagesHeadingOffset.left + 2,
            advantagesHeadingOffset.top + advantagesHeadingOffset.height / 2
          ],
          '#676767',
          1
        )
        drawLine(
          ctx,
          [
            footerContactsOffset.right,
            footerContactsOffset.top + footerContactsOffset.height / 2
          ],
          [
            advantagesSectionOffset.right - 20,
            footerContactsOffset.top + footerContactsOffset.height / 2
          ],
          'white'
        )
        drawLine(
          ctx,
          [
            advantagesSectionOffset.right - 20,
            footerContactsOffset.top + footerContactsOffset.height / 2
          ],
          [advantagesSectionOffset.right - 20, footerContactsOffset.top + 1000],
          'white'
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
      className='z-9 pointer-events-none absolute top-0 left-0 lg:hidden'
    />
  )
}
