import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconDark, IconLight } from 'components/icon'
import Logo from 'public/vercel.svg'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const Header: React.FC = () => {

  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className='h-16 w-full bg-background-primary fixed top-0 left-0 opacity-80 z-[99] backdrop-blur-[5px]'>
      <div className='w-[1050px] h-full mx-auto flex justify-between items-center'>
        <a href='/' className='flex justify-center items-center h-full'>
          <Logo className='w-16 h-8' />
          <span className='title'>BLOG</span>
        </a>
        <div
          className='cursor-pointer'
          onClick={() => setTheme(
            theme === Theme.DARK
              ? Theme.LIGHT
              : Theme.DARK
          )}
        >
            {theme === Theme.DARK ? <IconDark /> : <IconLight />}
        </div>
      </div>
    </header>
  )
}

export default Header