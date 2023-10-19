import { MainPageMainSection } from '../components/MainPageMainSection'
import { MainPageServicesSection } from '../components/MainPageServicesSection'
import { MainPageAboutSection } from '../components/MainPageAboutSection'
import { MainPageSchemeSection } from '../components/MainPageSchemeSection'
import { MainPagePortfolioSection } from '../components/MainPagePortfolioSection'
import { MainPagePhoneSection } from '../components/MainPagePhoneSection'
import { MainPageAdvantagesSection } from '../components/MainPageAdvantagesSection'
import { MainPageCanvas } from '../components/MainPageCanvas'
import { useEffect } from 'react'
import { MainPageCanvasMobile } from '../components/MainPageCanvasMobile'

export const MainPage = () => {
  const isMobile = window.innerWidth < 768
  return (
    <>
      <MainPageCanvasMobile />
      <MainPageCanvas />
      <MainPageMainSection />
      <MainPageServicesSection />
      <MainPageAboutSection />
      <MainPageSchemeSection />
      <MainPagePortfolioSection />
      <MainPagePhoneSection />
      <MainPageAdvantagesSection />
    </>
  )
}
