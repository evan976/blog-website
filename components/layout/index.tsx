import React from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'
import Seo from 'components/common/seo'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Seo />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
