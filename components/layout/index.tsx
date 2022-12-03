import ScrollToTop from 'components/common/scroll-to-top'
import * as React from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'
import BottomBar from './mobile/nav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Main>{children}</Main>
      <ScrollToTop />
      <Footer />
      <BottomBar />
    </div>
  )
}

export default Layout
