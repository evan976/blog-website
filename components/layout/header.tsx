import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Logo from 'public/logo.svg'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
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
    <header className="h-16 w-full bg-bg-100 fixed top-0 left-0 z-[99] backdrop-blur-[5px]">
      <div className="w-full px-4 sm:w-[1050px] sm:px-0 h-full mx-auto flex justify-between items-center">
        <a href="/" className="flex justify-center items-center h-full">
          <Logo className="mr-6" />
          <span className="text-blue text-sm">生之宇宙，归之殊途</span>
        </a>
        <div
          className="cursor-pointer"
          onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
        >
          {theme === Theme.DARK
            ? <i className="iconfont !text-xl">&#xe68f;</i>
            : <i className="iconfont !text-xl">&#xe624;</i>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
