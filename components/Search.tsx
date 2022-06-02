import * as React from 'react'
import { SearchContainer } from '../styles/components'
import { SearchOutlined } from './Icons/SearchOutlined'

const Search: React.FC = () => {
    return (
      <SearchContainer>
        <form className='search-form'>
          <label htmlFor="search-input">
            <SearchOutlined />
          </label>
          <input
            id='search-input'
            type="text"
            placeholder="探索与寻知"
            autoComplete='off'
            autoCorrect='off'
            enterKeyHint='search'
          />
        </form>
      </SearchContainer>
    )
}

export default Search