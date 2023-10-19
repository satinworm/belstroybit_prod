import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'

type Props = {
  link: string
  label: string
}

export const HeaderLink = (props: Props) => {
  const location = useLocation()
  const isMainPage = location.pathname === '/'
  const isPipePage = location.pathname.includes('electrical-works/xl-pipe')
  const isElectricPage = location.pathname.includes(
    'electrical-works/ElectricianServices'
  )
  const { link, label } = props
  const textColor =
    (isMainPage && 'text-accent') ||
    (isPipePage && 'text-xl-accent') ||
    (isElectricPage && 'text-accent')
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          'border-b-0 pb-2 text-lg',
          isActive
          //   ? `border-b-accent font-medium`
          //   : 'font-base border-b-transparent text-white'
        )
      }
      to={link}
      style={{ color: 'white' }}
      end
    >
      {label}
    </NavLink>
  )
}
