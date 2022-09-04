import React from 'react'
import Article from './article'
import Calendar from './calendar'
import Search from './search'

const Aside: React.FC = () => {
  return (
    <div className='order-3 flex-shrink-0 w-[256px] ml-3'>
      <Search />
      <Article />
      <Calendar />
    </div>
  )
}

export default Aside