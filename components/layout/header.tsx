import ClientOnly from 'components/common/client-only'
import { SearchDialog } from 'components/common/dialog'
import { useTheme } from 'next-themes'
import Logo from 'public/images/logo.svg'
import * as React from 'react'
import Search from './mobile/search'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const Header: React.FC = () => {
  const [visible, setVisible] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <ClientOnly>
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
          <div className='flex items-center'>
            <button className='hidden sm:block mr-6' onClick={() => setOpen(true)}>
            <i className="!text-lg iconfont">&#xe741;</i>
            </button>
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
        </div>
        <Search
          visible={visible}
          onClose={() => setVisible(false)}
        />
        <SearchDialog
          open={open}
          onClose={() => setOpen(false)}
        />
      </header>
    </ClientOnly>
  )
}

export default Header
