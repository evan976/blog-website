import React from 'react'
import Card from 'components/common/card'

const Search = () => {
  return (
    <Card>
      <form className='w-full flex justify-center items-center'>
        <input
          className='outline-none h-8 flex-1 text-sm px-[10px] rounded-l-sm bg-bg-300'
          type="search"
          name="search"
          maxLength={16}
          placeholder="探索与寻知"
        />
        <button className='flex justify-center items-center h-8 w-12 font-medium rounded-r-sm bg-blue'>
          <i className='text-white text-lg iconfont'>&#xe741;</i>
        </button>
      </form>
    </Card>
  )
}

export default Search