import React, { useState } from 'react'
import Link from 'next/link'
import * as Icon from 'components/icon'
import Logo from 'public/vercel.svg'

const Header: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className='header'>
      <div className='search'>
        <div className='search-input-wrap'>
          <input className='search-input' type='text' placeholder='Search' />
        </div>
        <div className='close-icon'>
          <Icon.IconClose onClick={() => setOpen(false)} />
        </div>
      </div>
      <nav className='navbar'>
        <div className='navbar-menu'>
          <Icon.IconMenu />
        </div>
        <Link className='logo' href='/'>
          <a><Logo /></a>
        </Link>
        <div className='navbar-search'>
          <Icon.IconSearch onClick={() => setOpen(true)} />
        </div>
      </nav>
    </header>
  )
}

export default Header