import Card from 'components/common/card'
import React from 'react'

const Tag: React.FC = () => {
  return (
    <Card title='文章标签' icon='&#xe701;' className='mt-3 sticky top-[382px]'>
      <ul className='max-h-80 overflow-y-scroll'>
        <li className='inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100 bg-lime'>
          <i className='iconfont align-middle'>&#xe701;</i>
          <span className='ml-[2px] text-sm'>标签(2)</span>
        </li>
        <li className='inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100 bg-lime'>
          <i className='iconfont align-middle'>&#xe701;</i>
          <span className='ml-[2px] text-sm'>标签标签(2)</span>
        </li>
        <li className='inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100 bg-lime'>
          <i className='iconfont align-middle'>&#xe701;</i>
          <span className='ml-[2px] text-sm'>标签(2)</span>
        </li>
        <li className='inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100 bg-lime'>
          <i className='iconfont align-middle'>&#xe701;</i>
          <span className='ml-[2px] text-sm'>标签(2)</span>
        </li>
        <li className='inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100 bg-lime'>
          <i className='iconfont align-middle'>&#xe701;</i>
          <span className='ml-[2px] text-sm'>标签(2)</span>
        </li>
        <li className='inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100 bg-lime'>
          <i className='iconfont align-middle'>&#xe701;</i>
          <span className='ml-[2px] text-sm'>标签(2)</span>
        </li>
        <li className='inline-block m-1 cursor-pointer transition-all duration-300 py-[2px] px-2 rounded-sm text-white opacity-80 hover:opacity-100 bg-lime'>
          <i className='iconfont align-middle'>&#xe701;</i>
          <span className='ml-[2px] text-sm'>标签(2)</span>
        </li>
      </ul>
    </Card>
  )
}

export default Tag