import * as React from 'react'
import { LatestSkeletonWrap } from '../../styles/comment'
import BaseSkeleton from '../Skeleton/BaseSkeleton'
import LineSkeleton from '../Skeleton/LineSkeleton'

const LatestCommentSkeleton: React.FC = () => {
  return (
    <LatestSkeletonWrap>
      <div className='module'>
        <div className='content-skeleton'>
          <BaseSkeleton
            width={32}
            height={32}
          />
          <LineSkeleton className='content' />
        </div>
      </div>
    </LatestSkeletonWrap>
  )
}

export default LatestCommentSkeleton
