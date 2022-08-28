import React from 'react'
import DesktopLayout from './desktop'
import MobileLayout from './mobile'

type AppLayoutProps = {
  mobile: boolean
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ mobile, children }) => {
  return (
    <div id='app' className='app'>
      {mobile
        ? <MobileLayout>{children}</MobileLayout>
        : <DesktopLayout>{children}</DesktopLayout>
      }
    </div>
  )
}

export default AppLayout