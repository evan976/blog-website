import React from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'
import BottomBar from './mobile/nav'
import Seo from 'components/common/seo'
import ScrollToTop from 'components/common/top'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Seo />
      <Header />
      <Main>{children}</Main>
      <ScrollToTop />
      <Footer />
      <BottomBar />
    </div>
  )
}

export default Layout
