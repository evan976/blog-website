import * as React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import useDarkMode from 'use-dark-mode'
import { Container } from '../styles/header'
import { DarkMode } from './Icons/DarkMode'
import { LightMode } from './Icons/LightMode'
import { MenuOutlined } from './Icons/MenuOutlined'
import { SearchOutlined } from './Icons/SearchOutlined'
import logo from '../public/static/code.svg'
import MobileMenu from './MobileMenu'
import Search from './Search'
import Menu from './Menu'
import MobileSearch from './MobileSearch'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {

  const darkMode = useDarkMode(false)

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)

  return (
    <Container>
      <div className='header-wrapper'>
        <div className='menu-action'>
          <MenuOutlined
            className='icon-menu'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
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
              ? <LightMode onClick={darkMode.toggle} />
              : <DarkMode onClick={darkMode.toggle} />
          }
        </div>
        <div className='search-action'>
          <SearchOutlined
            className='icon-search'
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
        </div>
      </div>
      <div className={classNames('mobile-nav', {
        'is-open': isMenuOpen
      })}>
        <MobileMenu setOpen={setIsMenuOpen} />
      </div>
      <div
        className={classNames('mask', {
          'is-active': isMenuOpen
        })}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div className={classNames('mobile-search', {
        'is-show': isSearchOpen
      })}>
        <MobileSearch open={isSearchOpen} close={setIsSearchOpen} />
      </div>
    </Container>
  )
}

export default Header