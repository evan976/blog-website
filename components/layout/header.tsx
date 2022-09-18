import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import MobileSearch from './mobile/search'
import Logo from 'public/logo.svg'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
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
        <a href="/" className="hidden sm:flex justify-center items-center h-full">
          <Logo className="mr-6" />
          <span className="text-blue text-sm">生之宇宙，归之殊途</span>
        </a>
        <button className="block sm:hidden" onClick={() => setVisible(true)}>
          <i className="iconfont !text-lg">&#xe741;</i>
        </button>
        <a href="/" className="block sm:hidden">
          <Logo />
        </a>
        <button
          className="cursor-pointer"
          onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
        >
          {theme === Theme.DARK
            ? <i className="iconfont !text-xl">&#xe68f;</i>
            : <i className="iconfont !text-xl">&#xe624;</i>
          }
        </button>
      </div>
      <MobileSearch
        visible={visible}
        setVisible={setVisible}
      />
    </header>
  )
}

export default Header
