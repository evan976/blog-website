import * as React from 'react'
import useSearch from '../hooks/useSearch'
import { SearchContainer } from '../styles/components'
import { SearchOutlined } from './Icons/SearchOutlined'

const Search: React.FC = () => {

  const [focus, setFocus] = React.useState<boolean>(false)
  const { keyword, setKeyword, handleChange, handleSubmit } = useSearch()

  React.useEffect(() => {
    if (!focus) setKeyword('')
  }, [focus])


    return (
      <SearchContainer>
        <form
          className='search-form'
          onSubmit={handleSubmit}
        >
          <label htmlFor="search-input">
            <SearchOutlined />
          </label>
          <input
            value={keyword}
            id='search-input'
            type="text"
            placeholder="探索与寻知"
            autoComplete='off'
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={handleChange}
          />
        </form>
      </SearchContainer>
    )
}

export default Search