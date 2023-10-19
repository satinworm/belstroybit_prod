import { useEffect, useRef } from 'react'
import { drawLine, getOffset } from '../utils/canvas'
import { createLogger } from 'vite'

export const MainPageCanvas = () => {
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
        const footerContacts =
          document.querySelector<HTMLElement>('#footerContacts')!

        const footer = document.querySelector<HTMLElement>('footer')!

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

        const footerOffset = getOffset(footer)
        const footerContactsOffset = getOffset(footerContacts)

        drawLine(
          ctx,
          [
            servicesHeadingOffset.left + servicesHeadingOffset.width,
            servicesHeadingOffset.top + servicesHeadingOffset.height / 2
          ],
          [
            servicesSectionOffset.left + servicesSectionOffset.width + 30,
            servicesSectionOffset.top + servicesHeadingOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            servicesSectionOffset.left + servicesSectionOffset.width + 30,
            servicesSectionOffset.top + servicesHeadingOffset.height / 2
          ],
          [
            servicesSectionOffset.left + servicesSectionOffset.width + 30,
            aboutSectionOffset.top - aboutHeadingOffset.height - 5
          ]
        )

        drawLine(
          ctx,
          [aboutSectionOffset.left + 250, aboutSectionOffset.top],
          [
            aboutSectionOffset.left + 250,
            aboutSectionOffset.top + aboutSectionOffset.height
          ],
          'white'
        )

        drawLine(
          ctx,
          [
            aboutSectionOffset.left + 250,
            aboutSectionOffset.top + aboutSectionOffset.height
          ],
          [aboutSectionOffset.left + 250, schemeHeadingOffset.top]
        )

        drawLine(
          ctx,
          [
            schemeHeadingOffset.left + schemeHeadingOffset.width,
            schemeHeadingOffset.height / 2 + schemeHeadingOffset.top
          ],
          [
            portfolioHeadingOffset.left + portfolioHeadingOffset.width / 2,
            schemeHeadingOffset.top + schemeHeadingOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            portfolioHeadingOffset.left + portfolioHeadingOffset.width / 2,
            schemeHeadingOffset.top + schemeHeadingOffset.height / 2
          ],
          [
            portfolioHeadingOffset.left + portfolioHeadingOffset.width / 2,
            portfolioHeadingOffset.top
          ]
        )

        drawLine(
          ctx,
          [
            portfolioHeadingOffset.left,
            portfolioHeadingOffset.top + portfolioHeadingOffset.height / 2
          ],
          [
            portfolioListOffset.left + 70,
            portfolioHeadingOffset.top + portfolioHeadingOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            portfolioListOffset.left + 70,
            portfolioHeadingOffset.top + portfolioHeadingOffset.height / 2
          ],
          [portfolioListOffset.left + 70, portfolioListOffset.top]
        )

        drawLine(
          ctx,
          [
            portfolioListOffset.left + 70,
            portfolioListOffset.top + portfolioListOffset.height
          ],
          [
            portfolioListOffset.left + 70,
            moreProjectsButtonOffset.top + moreProjectsButtonOffset.height / 2
          ]
        )
        drawLine(
          ctx,
          [
            portfolioListOffset.left + 70,
            moreProjectsButtonOffset.top + moreProjectsButtonOffset.height / 2
          ],
          [
            moreProjectsButtonOffset.left,
            moreProjectsButtonOffset.top + moreProjectsButtonOffset.height / 2
          ]
        )
        drawLine(
          ctx,
          [
            moreProjectsButtonOffset.left + moreProjectsButtonOffset.width,
            moreProjectsButtonOffset.top + moreProjectsButtonOffset.height / 2
          ],
          [
            phoneContainerOffset.left + phoneContainerOffset.width / 2,
            moreProjectsButtonOffset.top + moreProjectsButtonOffset.height / 2
          ]
        )
        drawLine(
          ctx,
          [
            phoneContainerOffset.left + phoneContainerOffset.width / 2,
            moreProjectsButtonOffset.top + moreProjectsButtonOffset.height / 2
          ],
          [
            phoneContainerOffset.left + phoneContainerOffset.width / 2,
            phoneContainerOffset.top
          ]
        )

        drawLine(
          ctx,
          [
            phoneNumberOffset.left,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          [
            phoneHeadingOffset.left + phoneHeadingOffset.width,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ]
        )
        // drawLine(
        //   ctx,
        //   [
        //     phoneHeadingOffset.right,
        //     phoneHeadingOffset.top + phoneHeadingOffset.height / 2
        //   ],
        //   [phoneContainerOffset.right, phoneContainerOffset.top]
        // )

        drawLine(
          ctx,
          [
            phoneHeadingOffset.left,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          [
            phoneSectionOffset.left,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            phoneSectionOffset.left,
            phoneHeadingOffset.top + phoneHeadingOffset.height / 2
          ],
          [
            phoneSectionOffset.left,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            phoneSectionOffset.left,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ],
          [
            phoneButtonOffset.left,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            phoneButtonOffset.left + phoneButtonOffset.width,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ],
          [
            phoneContainerOffset.left,
            phoneButtonOffset.top + phoneButtonOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            phoneContainerOffset.left + phoneContainerOffset.width / 2,
            phoneContainerOffset.top + phoneContainerOffset.height
          ],
          [
            phoneContainerOffset.left + phoneContainerOffset.width / 2,
            advantagesHeadingOffset.top
          ]
        )

        drawLine(
          ctx,
          [
            advantagesHeadingOffset.left,
            advantagesHeadingOffset.top + advantagesHeadingOffset.height / 2
          ],
          [
            advantagesSectionOffset.left,
            advantagesHeadingOffset.top + advantagesHeadingOffset.height / 2
          ]
        )

        drawLine(
          ctx,
          [
            advantagesSectionOffset.left,
            advantagesHeadingOffset.top + advantagesHeadingOffset.height / 2
          ],
          [advantagesSectionOffset.left, footerOffset.top]
        )
        drawLine(
          ctx,
          [
            advantagesSectionOffset.left,
            advantagesHeadingOffset.top + advantagesHeadingOffset.height / 2
          ],
          [advantagesSectionOffset.left, footerOffset.top]
        )
        drawLine(
          ctx,
          [advantagesSectionOffset.left, footerOffset.top],
          [advantagesSectionOffset.left, footerOffset.top + 25],
          'white'
        )
        drawLine(
          ctx,
          [
            footerContactsOffset.right,
            footerContactsOffset.top + footerContactsOffset.height / 2
          ],
          [
            advantagesSectionOffset.right,
            footerContactsOffset.top + footerContactsOffset.height / 2
          ],
          'white'
        )
        drawLine(
          ctx,
          [
            advantagesSectionOffset.right,
            footerContactsOffset.top + footerContactsOffset.height / 2
          ],
          [advantagesSectionOffset.right, footerContactsOffset.top + 1000],
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
      className='pointer-events-none absolute top-0 left-0 z-20 hidden lg:block'
    />
  )
}
