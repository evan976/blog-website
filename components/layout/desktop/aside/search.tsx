import { useRouter } from 'next/router'
import React from 'react'
import Card from 'components/common/card'

const Search: React.FC = () => {

  const router = useRouter()
  const [keyword, setKeyword] = React.useState('')

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!keyword) return
    router.push(`/search/${keyword}`)
  }

  return (
    <Card>
      <form className="w-full flex justify-center items-center" onSubmit={handleSearch}>
        <input
          className="outline-none h-8 flex-1 text-sm px-[10px] rounded-l-sm bg-bg-200"
          type="search"
          name="search"
          maxLength={16}
          value={keyword}
          placeholder="探索与寻知"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="flex justify-center items-center h-8 w-12 font-medium rounded-r-sm bg-blue">
          <i className="text-white !text-lg iconfont">&#xe741;</i>
        </button>
      </form>
    </Card>
  )
}

export default Search
