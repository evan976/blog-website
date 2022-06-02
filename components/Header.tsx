import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'
import useDarkMode from 'use-dark-mode'
import { Container } from '../styles/header'
import { DarkMode } from './Icons/DarkMode'
import { LightMode } from './Icons/LightMode'
import logo from '../public/static/code.svg'
import Search from './Search'
import Menu from './Menu'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {

  const darkMode = useDarkMode(false)

  return (
    <Container>
      <div className='header-wrapper'>
        <div className='logo'>
          <a href="/">
            <Image
              src={logo}
              alt="logo"
              width={48}
              height={48}
            />
          </a>
          <span>BLOG</span>
        </div>
        <Menu />
        <Search />
        <div className='action'>
          {
            darkMode.value
              ? <DarkMode onClick={darkMode.toggle} />
              : <LightMode onClick={darkMode.toggle} />
          }
        </div>
      </div>
    </Container>
  )
}

export default Header