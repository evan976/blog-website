import * as React from 'react'
import useSearch from '../hooks/useSearch'
import { CloseOutlined } from './Icons/CloseOutlined'

interface MobileSearchProps {
  open: boolean
  close: (open: boolean) => void
}

const MobileSearch: React.FC<MobileSearchProps> = ({ open, close }) => {

  const inputRef = React.useRef<HTMLInputElement>(null)
  const { keyword, setKeyword, handleChange, handleSubmit } = useSearch()

  React.useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])


  return (
    <>
      <form
        className='search-form'
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          type='text'
          value={keyword}
          className='search-input'
          placeholder='探索与寻知'
          autoComplete='off'
          onChange={handleChange}
        />
      </form>
      <div className='close-action'>
        <CloseOutlined
          className='icon-close'
          onClick={() => {
            close(false)
            setKeyword('')
          }}
        />
      </div>
    </>
  )
}

export default MobileSearch
