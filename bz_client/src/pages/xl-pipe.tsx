import { XLPipePageMainSection } from '../components/XLPipePageMainSection'
import { XLPipePageHouseSection } from '../components/XLPipePageHouseSection'
import { XLPipePageSystemSection } from '../components/XLPipePageSystemSection'
import { XLPipeAdvantagesSection } from '../components/XLPipeAdvantagesSection'
import { XLPipeCanvas } from '../components/XLPipeCanvas'
import { XLPipeCalculator } from '../components/XLPipeCalculator'

export const XLPipePage = () => {
  return (
    <>
      <XLPipeCanvas />
      <XLPipePageMainSection />
      <XLPipePageHouseSection />
      <XLPipePageSystemSection />
      <XLPipeAdvantagesSection />
      <XLPipeCalculator />
    </>
  )
}
