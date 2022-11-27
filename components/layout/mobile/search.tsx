import Slide from 'components/common/slide'
import useSearch from 'hooks/useSearch'
import * as React from 'react'

const MobileSearch: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const { value, onChange, onSearch } = useSearch()

  return (
    <Slide
        visible={visible}
        options={{
          from: { opacity: 0, height: 0 },
          enter: { opacity: 1, height: 56 },
          leave: { opacity: 0, height: 0 },
        }}
      >
        <div className={'w-full h-14 bg-bg-100 px-3 flex border-t border-bg-200 items-center transition-all duration-300 shadow-md'}>
          <form
            className="w-full flex justify-center items-center"
            onSubmit={e => onSearch(e, () => onClose())}
          >
            <input
              className="outline-none h-8 flex-1 text-sm rounded-l-sm bg-bg-100"
              type="text"
              name="search"
              maxLength={16}
              value={value}
              placeholder="探索与寻知"
              onChange={onChange}
            />
            <button className="ml-3" type="reset" onClick={onClose}>
              <i className="!text-lg iconfont">&#xe685;</i>
            </button>
          </form>
        </div>
      </Slide>
  )
}

export default MobileSearch
