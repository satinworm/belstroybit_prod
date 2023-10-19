export const HeaterPageAboutSection = () => {
  return (
    <section className='bg-white'>
      <div className='container my-3 sm:my-5'>
        <h2 className='xlHeading text-[28px] text-black sm:text-[36px]'>
          ОБОГРЕВАТЕЛИ КЕРАМОГРАНИТНЫЕ
        </h2>
        <img
          src='/CeramiсGranite-heater.svg'
          alt='xl-pipe-house'
          className='mx-auto mt-10 hidden md:mt-20  md:block'
        />
        <img
          src='/CeramiсGranite-heater_mobile.svg'
          alt='xl-pipe-house'
          className='mx-auto mt-10 w-full md:mt-20 md:hidden'
        />
      </div>
    </section>
  )
}
