import { MainPageHeading } from './MainPageHeading'
import { MainPageBoxNumber } from './MainPageBoxNumber'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

export const Footer = () => {
  const location = useLocation()
  const isMainPage = location.pathname === '/'
  const isPipePage = location.pathname.includes('electrical-works/xl-pipe')
  const isElectricPage =
    location.pathname.includes('electrical-works/ElectricianServices') ||
    location.pathname.includes('electrical-works/Heaters')
  const isHeaterPage = location.pathname.includes('electrical-works/Heaters')

  return (
    <footer
      className={clsx(
        'bg-[#252525]',
        (isPipePage || isElectricPage) && '!bg-white'
      )}
    >
      <div className='relative flex flex-col items-center justify-between pb-7 pt-12 lg:container lg:flex-row lg:px-5 lg:pt-16'>
        <div className='w-full px-2 pb-14 lg:w-1/3 lg:px-0'>
          {!isPipePage && !isHeaterPage && (
            <div
              id='footerContacts'
              className='absolute top-5 left-1 flex items-center lg:-left-4'
            >
              <h2
                className={clsx(
                  'z-[40] text-4xl font-bold uppercase text-white/5 lg:text-7xl',
                  isElectricPage && 'text-[#f2f2f2]'
                )}
              >
                Contacts
              </h2>
              {!isPipePage && !isElectricPage && (
                <MainPageBoxNumber number='07' contrast />
              )}
            </div>
          )}

          <div
            className={clsx(
              'flex flex-col text-2xl text-[#E8E8E8] lg:mt-12 lg:gap-5',
              isPipePage && 'text-[#7C3C82]',
              isElectricPage && 'text-[#000001]'
            )}
            id='contacts'
          >
            <span className='hidden font-medium tracking-[-0.035em] lg:block'>
              Контакты
            </span>
            {!isPipePage && !isElectricPage && (
              <span className='block whitespace-nowrap'>Наш адрес:</span>
            )}
          </div>

          <address
            id='footerAddress'
            style={{
              fontStyle: isPipePage ? 'normal' : 'italic'
            }}
            className={clsx(
              'text-[#A5A5A5]',
              isPipePage && '!text-xl-accent',
              isElectricPage && 'text-[#000001]'
            )}
          >
            <div className=''>
              <img
                src={
                  (isElectricPage && '/icons/location-yellow.svg') ||
                  (isPipePage && '/icons/location_xl-pipe.svg') ||
                  (isMainPage && '/icons/location-yellow.svg')
                }
                alt='location'
              />
              <span className='whitespace-nowrap'>
                г. Гродно ул. Пушкина д.13 оф. 20
              </span>
            </div>
            <div className='items-start'>
              <img
                src={
                  (isElectricPage && '/icons/call-yellow.svg') ||
                  (isPipePage && '/icons/call_xl-pipe.svg') ||
                  (isMainPage && '/icons/call-yellow.svg')
                }
                alt='call'
              />
              <div className='flex flex-col gap-2'>
                <a href='tel:+375290000000' className='whitespace-nowrap'>
                  +375 (29) 000-00-00
                </a>
              </div>
            </div>
            <div>
              <img
                src={
                  (isElectricPage && '/icons/clock-yellow.svg') ||
                  (isPipePage && '/icons/clock_xl-pipe.svg') ||
                  (isMainPage && '/icons/clock-yellow.svg')
                }
                alt='clock'
              />
              <span className='whitespace-nowrap'>Пн-пт с 10.00 до 18.00</span>
            </div>
            <div>
              <img
                src={
                  (isElectricPage && '/icons/mail-yellow.svg') ||
                  (isPipePage && '/icons/mail_xl-pipe.svg') ||
                  (isMainPage && '/icons/mail-yellow.svg')
                }
                alt='mail'
              />
              <a
                href='mailto:belstroybutzapad@gmail.com'
                className='whitespace-nowrap'
              >
                belstroybutzapad@gmail.com
              </a>
            </div>
          </address>
        </div>

        <iframe
          src='https://yandex.by/map-widget/v1/-/CCUZZSgecA'
          height='400'
          // frameBorder='1'
          allowFullScreen={true}
          className='w-screen lg:h-[300px] lg:w-2/3'
        />
      </div>
    </footer>
  )
}
