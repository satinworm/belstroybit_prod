import { ElectricMainSection } from '../components/ElectricMainSection'
import { ElectricianPageServicesSection } from '../components/ElectricianPageServicesSection'
import { MainPageAboutSection } from '../components/MainPageAboutSection'
import { ElectricPageAboutSection } from '../components/ElectricPageAboutSection'
import { ElectricCanvas } from '../components/ElectricCanvas'
import { ElectricAdvantagesSection } from '../components/ElectricAdvantagesSection'
import { ElectricAndForm } from '../components/ElectricAndForm'
import { ElectricCanvasMobile } from '../components/ElectricCanvasMobile'

export const ElectricianServices = () => {
  return (
    <>
      <ElectricCanvasMobile />
      <ElectricCanvas />
      <ElectricMainSection />
      <ElectricianPageServicesSection />
      <ElectricPageAboutSection />
      <ElectricAdvantagesSection />
      <ElectricAndForm />
    </>
  )
}
