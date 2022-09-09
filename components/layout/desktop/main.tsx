import React from 'react'
import Aside from './aside'
import Nav from './nav'

type MainProps = {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-[1050px] sm:px-0 px-3 mx-auto flex justify-between relative top-16 sm:top-20">
      <Nav />
      <div className="order-2 flex-grow relative overflow-hidden transition-none">{children}</div>
      <Aside />
    </div>
  )
}

export default Main
