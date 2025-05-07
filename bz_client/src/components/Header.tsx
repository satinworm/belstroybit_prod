import { HeaderLink } from './HeaderLink'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import { Services } from './Services'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import Navigation from './Navigation'
import { ConsultationModal } from './ConsultationModal'
import { NavLink, useLocation } from 'react-router-dom'
const navLinks = [
  // {
  //   id: 0,
  //   link: "/",
  //   label: "Услуги",
  // },
  // {
  //   id: 1,
  //   link: '/xl-pipe',
  //   label: 'XL Pipe'
  // },
  {
    id: 2,
    // link: '/promo',
    link: '/',
    label: 'Акции'
  },
  {
    id: 3,
    // link: '/contacts',
    link: '/',
    label: 'Контакты'
  },
  {
    id: 4,
    // link: '/partners',
    label: 'Партнеры',
    link: '/'
  },
  {
    id: 5,
    // link: '/calculator',
    link: '/',
    label: 'Онлайн-калькулятор'
  },
  {
    id: 6,
    // link: '/smart-home',
    link: '/',
    label: 'Умный дом'
  }
]

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()
  const isMainPage = location.pathname === '/'
  const isPipePage = location.pathname.includes('electrical-works/xl-pipe')
  const isElectricPage =
    location.pathname.includes('electrical-works/ElectricianServices') ||
    location.pathname.includes('electrical-works/Heaters')
  const textColor =
    (isMainPage && 'accent') ||
    (isPipePage && 'xl-accent') ||
    (isElectricPage && 'accent')
  return (
    <>
      <header className='absolute top-0 left-0 z-10 w-full bg-transparent py-3 lg:py-8'>
        <div className='container px-[15px]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[120px]'>
              <NavLink to='/'>
                <img
                  src='/logo.svg'
                  alt='logo'
                  className='h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] md:h-[65px] md:w-[65px] lg:h-[80px] lg:w-[80px]'
                />
              </NavLink>
              <span className='lg:show hidden max-w-[200px] text-xxs text-dark-gray'>
                Строительная компания. Работаем с 9999 года. Выполнили 400+
                проектов. Штатные специалисты с опытом 8+ лет
              </span>
            </div>

            <div className='hidden items-center gap-5 text-dark-gray lg:flex'>
              <div className='flex items-center gap-3'>
                <span className='max-w-[95px] text-right text-xs'>
                  Пишите, мы онлайн:
                </span>
                <img
                  src='/icons/telegram.svg'
                  alt='telegram'
                  className='h-[32px] w-[32px]'
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-xxs'>Пн-Вс: 09.00 - 21.00</span>
                <a href='tel:+375293153535' className='text-lg font-medium'>
                  +375 (29) 315-35-35
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className='text-sm text-accent underline'
                  type='button'
                >
                  Заказать обратный звонок
                </button>
              </div>
            </div>
          </div>
          <div className='container flex max-w-[1280px] flex-col justify-center'>
            <nav className='relative mt-6 hidden w-full justify-between lg:flex'>
              <Popover className='relative'>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={`
                ${
                  open
                    ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                      `border-b-${textColor} font-medium text-${textColor}`
                    : 'font-base border-b-transparent text-white'
                }
                group flex items-center border-b-2 pb-2 text-lg focus:outline-none`}
                    >
                      <span>Услуги</span>
                      <ChevronDownIcon
                        className={`${
                          open
                            ? `rotate-180 border-b-${textColor} font-medium text-${textColor}`
                            : 'text-opacity-70'
                        }
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden='true'
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 -translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-1'
                    >
                      <Popover.Panel className='absolute z-[50] mt-3 w-screen transform bg-white px-4 sm:px-0 lg:max-w-3xl lg:translate-x-[0%] 2xl:-translate-x-[10%]'>
                        <div className='overflow-hidden rounded-lg px-8 py-5 text-black shadow-lg'>
                          <Services close={close} />
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {navLinks.map(link => (
                <HeaderLink {...link} key={link.id} />
              ))}
            </nav>
            <Navigation />
          </div>
        </div>
      </header>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        // accentColor={pathname === '/' ? 'black' : '#7C3C82'}
        accentColor={
          (isElectricPage && '#FCD638') ||
          (isPipePage && '#7C3C82') ||
          (isMainPage && 'black')
        }
        // inputBg={pathname === '/' ? '#676767' : '#A5A5A5'}
        inputBg={
          (isElectricPage && '#A5A5A5') ||
          (isPipePage && '#A5A5A5') ||
          (isMainPage && '#676767')
        }
      />
    </>
  )
}
