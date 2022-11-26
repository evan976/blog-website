import * as React from 'react'
import Aside from './aside'
import Nav from './nav'

interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-[1050px] sm:px-0 px-3 mx-auto flex justify-between mt-16 sm:mt-20 mb-16 sm:mb-0">
      <Nav />
      <div className="order-2 flex-grow self-start relative overflow-hidden transition-none">
        {children}
      </div>
      <Aside />
    </div>
  )
}

export default Main
