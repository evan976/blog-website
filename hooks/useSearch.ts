import * as React from 'react'
import { useRouter } from 'next/router'

function useSearch() {
  const router = useRouter()
  const [keyword, setKeyword] = React.useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (keyword) {
      router.push(`/search/${keyword}`)
    }
  }

  return {
    keyword,
    setKeyword,
    handleChange,
    handleSubmit
  }
}

export default useSearch
