import React, { FC, Fragment, useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Popover, Transition } from '@headlessui/react'
import { BurgerMenu } from './BurgerMenu'
import clsx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Services } from '../components/Services'
import { ServicesBurgerMenu } from '../components/ServicesBurgerMenu'
import { useLocation } from 'react-router-dom'
import { BurgerMenuXLPipe } from './BurgerMenuXLPipe'
import { BurgerMenuElectric } from './BurgerMenuElectric'

const links = [
  { title: 'Акции', target: '' },
  { title: 'Контакты', target: '' },
  { title: 'Партнёры', target: '' },
  { title: 'Умный дом', target: '' },
  { title: 'Онлайн калькулятор', target: '' }
]

const SideMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isMainPage = location.pathname === '/'
  const isPipePage = location.pathname.includes('electrical-works/xl-pipe')
  const isElectricPage = location.pathname.includes(
    'electrical-works/ElectricianServices'
  )
  const isHeaterPage = location.pathname.includes('electrical-works/Heaters')

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if (isOpen) {
      document.querySelector('html').style.overflow = 'hidden'
    }
    return () => {
      document.querySelector('html').style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className='fixed relative inset-0 z-50 '>
      <div
        className={clsx('fixed inset-0 bg-black/80 backdrop-blur-[8px]')}
        onClick={handleClick}
        style={{ display: isOpen ? 'block' : 'none' }}
      ></div>
      <div
        className={clsx(
          'fixed inset-y-0 right-0 z-50 flex min-h-screen w-screen max-w-full flex-col justify-between rounded-bl-xl rounded-tl-xl px-[45px] pt-[80px] pb-[40px] transition duration-300 md:w-[60vw]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div id='papa' className='mt-5 mb-6 overflow-y-auto'>
          <div>
            <div className='absolute top-[40px] z-50 flex w-[85vw] items-center justify-evenly'>
              <div className='h-[40px] w-[40px] overflow-hidden rounded-md'>
                <img src='/logo.svg' alt='minilogo' />
              </div>
              <span className='text-[20px] font-medium text-white'>Меню</span>
              <div>
                <button className='' onClick={handleClick}>
                  <img src='/icons/CloseBurger.svg' alt='close' />
                </button>
              </div>
            </div>
            <div className='z-[40] mt-[100px] flex w-fit flex-col justify-center space-y-2'>
              {/*<button className='w-fit cursor-pointer border-b border-b-transparent text-[20px] font-medium text-white transition hover:border-b-white'>*/}
              {/*  Услуги*/}
              {/*</button>*/}
              <Popover className='relative overflow-y-hidden'>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={`
                ${
                  open
                    ? `border-b-white font-medium text-white`
                    : 'font-base border-b-transparent text-white'
                }
                group flex items-center border-b-2 pb-2 text-lg focus:outline-none`}
                    >
                      <span className='w-fit cursor-pointer text-[20px] font-medium text-white transition'>
                        Услуги
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open
                            ? `rotate-180 border-b-white font-medium text-white`
                            : 'text-opacity-70'
                        }
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden='true'
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition duration-500'
                      enterFrom='opacity-0 -translate-y-[100%]'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition duration-500'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-[80%]'
                    >
                      <Popover.Panel className='z-10 mt-2  transform px-0 sm:px-0 lg:max-w-3xl'>
                        <div className='rounded-lg shadow-lg'>
                          <ServicesBurgerMenu
                            close={close}
                            handleClick={handleClick}
                          />
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleClick}
                  className='w-fit cursor-pointer border-b border-b-transparent text-[20px] font-medium text-white transition hover:border-b-white'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='mx-auto flex w-[188px] flex-col gap-3'>
          <a
            href='https://instagram.com/alum_zone?igshid=NzAzN2Q1NTE='
            className='flex items-center gap-[28px]'
          >
            <img src='/icons/instagram_icon.svg' alt='instagram' />
            <span className='border-b border-b-transparent font-syne text-[24px] leading-[24px] text-white transition hover:border-b-black'>
              Instagram
            </span>
          </a>
          <a href='tel:+375291111111' className='flex items-center gap-[16px]'>
            <img src='/icons/call_icon.svg' alt='facebook' />
            <span className='border-b border-b-transparent text-[18px] leading-[16px] text-white transition hover:border-b-black'>
              +375(29)111-11-11
            </span>
          </a>
        </div>
      </div>
      {/*</Transition>*/}
      {isOpen ? null : (
        <button
          className='fixed top-0 right-0 mt-[15px] mr-[15px] text-white'
          onClick={handleClick}
        >
          {isMainPage && <BurgerMenu width={36} height={36} />}
          {isPipePage && <BurgerMenuXLPipe width={36} height={36} />}
          {isElectricPage && <BurgerMenuElectric width={36} height={36} />}
          {isHeaterPage && <BurgerMenuElectric width={36} height={36} />}
        </button>
      )}
    </div>
  )
}

export default SideMenu
