import { useRouter } from 'next/router'
import * as React from 'react'

const useSearch = () => {
  const router = useRouter()
  const [keyword, setKeyword] = React.useState('')

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value)
  }

  const onSearch = (e: React.FormEvent<HTMLFormElement>, callback?: () => void) => {
    e.preventDefault()
    if (!keyword)
      return
    router.push(`/search/${keyword}`)
    callback?.()
  }

  return {
    value: keyword,
    setValue: setKeyword,
    onChange,
    onSearch,
  }
}

export default useSearch
