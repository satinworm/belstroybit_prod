import { useState } from 'react'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MobileSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(typeof projects)
  let arr = [...projects]

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNextClick = () => {
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='relative h-[200px] w-[230px] bg-gray-300'>
        {/*<FaChevronLeft*/}
        <div onClick={handlePrevClick}>prev</div>
        {/*  className='absolute top-1/2 left-0 -translate-y-1/2 transform cursor-pointer text-4xl text-gray-400 transition-all duration-200 hover:text-gray-700'*/}
        {/*  onClick={handlePrevClick}*/}
        {/*/>*/}
        {/*<FaChevronRight*/}
        {/*  className='absolute top-1/2 right-0 -translate-y-1/2 transform cursor-pointer text-4xl text-gray-400 transition-all duration-200 hover:text-gray-700'*/}
        {/*  onClick={handleNextClick}*/}
        {/*/>*/}
        <div onClick={handleNextClick}>next</div>
        <img src={arr[currentIndex].img} alt='' className='h-full w-full' />
      </div>
    </div>
  )
}
export default MobileSlider
