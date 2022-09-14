import React from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
