import React from 'react'
import Header from './header'
import Main from './main'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="desktop-layout">
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
