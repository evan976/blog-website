import * as React from 'react'
import useDarkMode from 'use-dark-mode'
import { Container } from '../styles/header'
import { DarkMode } from './Icons/DarkMode'
import { LightMode } from './Icons/LightMode'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {

  const darkMode = useDarkMode(false)

  return (
    <Container>
      <div className='header-wrapper'>
        <h1>Header</h1>
        <div>
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