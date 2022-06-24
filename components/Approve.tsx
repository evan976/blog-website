import * as React from 'react'
import classNames from 'classnames'
import { ApproveWrap } from '../styles/components'
import { LikeOutlined } from './Icons/LikeOutlined'
import * as mainApi from '../api'

interface Props {
  id: number
  likes: number
  refresh: (likes: number) => void
}

const Approve: React.FC<Props> = ({ id, likes, refresh }) => {

  const likeRef = React.useRef<boolean>(false)

  const handleLike = React.useCallback(async () => {
    mainApi.articleService.updateLikes(String(id), { type: 'like' })
      .then((res) => {
        likeRef.current = true
        refresh(res.data.likes)
      })

  }, [likeRef.current, id])


  return (
    <ApproveWrap
      className={classNames('approve', {
        'is-approved': likeRef.current
      })}
      onClick={likeRef.current ? () => {} : handleLike}
    >
      <LikeOutlined />
      <span>很赞 {likes}</span>
    </ApproveWrap>
  )
}

export default Approve
