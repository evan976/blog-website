import { useRouter } from 'next/router'
import * as React from 'react'

interface MobileSearchProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileSearch: React.FC<MobileSearchProps> = ({ visible, setVisible }) => {

  const router = useRouter()
  const [keyword, setKeyword] = React.useState('')

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!keyword) return
    router.push(`/search/${keyword}`)
    setVisible(false)
  }

  return (
    <div className={`w-full h-16 bg-bg-100 fixed top-0 z-[9999] px-3 flex items-center transition-all duration-300 ${visible ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
      <form className="w-full flex justify-center items-center" onSubmit={handleSearch}>
        <input
          className="outline-none h-8 flex-1 text-sm rounded-l-sm bg-bg-100"
          type="text"
          name="search"
          maxLength={16}
          value={keyword}
          placeholder="探索与寻知"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="ml-3" type="reset" onClick={() => setVisible(false)}>
          <i className="!text-lg iconfont">&#xe685;</i>
        </button>
      </form>
    </div>
  )
}

export default MobileSearch