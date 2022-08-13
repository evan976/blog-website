import React from 'react'
import { TagItemWrap } from '../../styles/tag'

type Props = {
  name: string
  color: string
  articleCount: number
  onClick: (name: string) => void
}

const TagItem: React.FC<Props> = ({ name, color, articleCount, onClick }) => {
  return (
    <TagItemWrap
      className='tag-item'
      onClick={() => onClick(name)}
      style={{ backgroundColor: color }}
    >
      <div className='tag-name'>{name}</div>
      <div className='tag-count'>({articleCount})</div>
    </TagItemWrap>
  )
}

export default TagItem