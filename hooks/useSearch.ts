import * as React from 'react'

function useSearch() {
  const [keyword, setKeyword] = React.useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (keyword) {
      console.log(keyword)
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
