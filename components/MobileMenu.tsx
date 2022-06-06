import * as React from 'react'
import Image from 'next/image'
import { MobileMenuContainer } from '../styles/components'
import logo from '../public/static/code.svg'
import useDarkMode from 'use-dark-mode'
import { LightMode } from './Icons/LightMode'
import { DarkMode } from './Icons/DarkMode'
import { ROUTE_LINKS } from '../constants'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MobileMenu: React.FC<{setOpen: (open: boolean) => void}> = ({ setOpen }) => {

  const darkMode = useDarkMode(false)
  const router = useRouter()

  return (
    <MobileMenuContainer>
      <div className='user-info'>
        <Image
          src={logo}
          alt="logo"
          width={64}
          height={64}
        />
        <span>Evan</span>
      </div>
      <div className='dark-action'>
        {
          darkMode.value
            ? <LightMode onClick={darkMode.toggle} />
            : <DarkMode onClick={darkMode.toggle} />
        }
      </div>
      <div className='menu'>
        {
          ROUTE_LINKS.map(route => (
            <li
              key={route.label}
              className={classNames('item', {
                'active': router.asPath === route.path
              })}
              onClick={() => setOpen(false)}
            >
              <Link href={route.path} passHref>{route.label}</Link>
            </li>
          ))
        }
      </div>
    </MobileMenuContainer>
  )
}

export default MobileMenu
