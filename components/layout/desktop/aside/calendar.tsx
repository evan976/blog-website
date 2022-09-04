import React from 'react'
import Card from 'components/common/card'
import { weekMap } from 'utils/date'
import classNames from 'classnames'

const Calendar = () => {
  return (
    <Card className='mt-3'>
      <div className='flex justify-between items-center relative mb-1'>
        <button className='w-7 h-7 text-font-secondary bg-bg-300 cursor-pointer rounded-sm flex justify-center items-center hover:bg-bg-300'>
          <i className='iconfont'>&#xe68b;</i>
        </button>
        <h2>2022年09月04日</h2>
        <button className='w-7 h-7 text-font-secondary bg-bg-300 cursor-pointer rounded-sm flex justify-center items-center hover:bg-bg-300'>
          <i className='iconfont'>&#xe689;</i>
        </button>
      </div>
      <div className='text-sm font-bold grid grid-cols-7 h-7 leading-7'>
        {weekMap.map((item, index) => (
          <span className={classNames('text-center block', {
            'text-font-quaternary font-normal': index === 0 || index === 6
          })} key={index}>{item}</span>
        ))}
      </div>
    </Card>
  )
}

export default Calendar