import { MainPageHeading } from './MainPageHeading'
import { ServiceListed } from './ServiceListed'
import { WorkStep } from './WorkStep'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Pagination, Navigation, Keyboard, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const projects = [
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Лучшие',
    img: '/portfolio/1.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Лучшие',
    img: '/portfolio/2.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Архитектура',
    img: '/portfolio/3.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Лучшие',
    img: '/portfolio/4.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Ремонт',
    img: '/portfolio/5.JPG'
  },
  {
    title: 'Тест',
    description: 'Тест',
    price: 'от 1500',
    category: 'Ремонт',
    img: '/portfolio/6.JPG'
  }
]

const uniqueCategories = projects
  .map(project => project.category)
  .filter((value, index, self) => self.indexOf(value) === index)

export const MainPagePortfolioSection = () => {
  const swiper = useSwiper()
  const swiperRef = useRef(null)
  const [swiperIndex, setSwiperIndex] = useState<number>(0)
  // const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  // const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedId, setSelectedId] = useState<0 | 1 | 2 | 3>(0)

  const handleShowAllProjectsClick = () => {
    setFilteredProjects(projects)
    setSelectedId(0)
  }
  const handleCategoryClick = (category: string, index: number) => {
    setFilteredProjects(
      projects.filter(project => project.category === category)
    )
    setSelectedId(index)
  }

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value
    if (category === 'Все проекты') {
      setFilteredProjects(projects)
      setSelectedId(0)
      return
    } else {
      setFilteredProjects(
        projects.filter(project => project.category === category)
      )
      setSelectedId(uniqueCategories.indexOf(category) + 1)
    }
  }

  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [filteredProjects])

  return (
    <section className='container mt-[30px] lg:mt-[90px]'>
      <MainPageHeading
        title='Portfolio'
        subtitle='Наше портфолио'
        number='04'
        position='right'
        id='portfolioHeading'
      />
      <div className='mt-[40px] flex flex-col items-center gap-10 lg:mt-[100px] lg:flex-row'>
        <div
          className='hidden max-w-max flex-col gap-4 lg:flex'
          id='portfolioList'
        >
          <button
            type='button'
            key={0}
            className={clsx(
              'transition duration-200',
              selectedId === 0
                ? 'portfolioButton_active portfolioButton_shadow'
                : 'portfolioButton hover:portfolioButton_shadow'
            )}
            onClick={handleShowAllProjectsClick}
          >
            Все проекты
          </button>
          {uniqueCategories.map((category, index) => (
            <button
              type='button'
              key={index + 1}
              className={clsx(
                'transition duration-200',
                selectedId === index + 1
                  ? 'portfolioButton_active portfolioButton_shadow'
                  : 'portfolioButton hover:portfolioButton_shadow'
              )}
              onClick={() => handleCategoryClick(category, index + 1)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='flex w-full justify-center lg:hidden'>
          <label htmlFor='categorySelector' className='sr-only'>
            Выберите категорию
          </label>
          <select
            id='categorySelector'
            className={clsx(
              'mx-auto w-[300px] py-2 transition duration-200',
              'portfolioButton hover:portfolioButton_shadow bg-white text-black focus:outline-none'
            )}
            value={uniqueCategories[selectedId - 1]}
            onChange={handleCategoryChange}
          >
            <option value={'Все проекты'}>Все проекты</option>
            {uniqueCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='relative block md:hidden'>
          <Swiper
            pagination={{
              dynamicBullets: true
            }}
            modules={[Keyboard, Pagination, Navigation, Scrollbar]}
            spaceBetween={5}
            onRealIndexChange={index => setSwiperIndex(index)}
            slidesPerView={1}
            keyboard={{
              enabled: true
            }}
            ref={swiperRef}
            navigation={{
              nextEl: '.nextElement',
              prevEl: '.prevElement'
            }}
            onSlideChange={swiper => setSwiperIndex(swiper.realIndex)}
            className='mySwiper h-[200px] w-[300px] sm:h-[300px] sm:w-[450px]'
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <img
                  src={project.img}
                  alt={project.title}
                  className='h-[200px] w-[300px] bg-gray-300 sm:h-[300px] sm:w-[450px]'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={clsx(
              'prevElement absolute left-[-30px] top-1/2 -translate-y-1/2 cursor-pointer transition',
              swiperIndex === 0 && 'cursor-default opacity-50'
            )}
          >
            <img src='/prev.svg' alt='prevArrow' />
          </div>
          <div
            className={clsx(
              'nextElement absolute right-[-30px] top-1/2 -translate-y-1/2 cursor-pointer transition',
              swiperIndex === filteredProjects.length - 1 &&
                'cursor-default opacity-20'
            )}
          >
            <img src='/next.svg' alt='nextArrow' />
          </div>
        </div>

        <ul className='mx-auto hidden grid-cols-3 gap-3 md:grid'>
          {filteredProjects.map((project, index) => (
            <img
              key={index}
              src={project.img}
              className='h-[200px] w-[230px] bg-gray-300'
            />
          ))}
        </ul>
      </div>
      <div className='z-30 mt-20 flex w-full justify-center'>
        <button className='primaryButton button' id='moreProjects'>
          Больше проектов
        </button>
      </div>
    </section>
  )
}
