import React from 'react'
import Header from './header'

type MobileLayoutProps = {
  children: React.ReactNode
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div className="mobile-layout">
      <Header />
      {children}
    </div>
  )
}

export default MobileLayout
