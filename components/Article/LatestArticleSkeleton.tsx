import * as React from 'react'
import { LastestArticleSkeletonWrap } from '../../styles/article'
import BaseSkeleton from '../Skeleton/BaseSkeleton'
import LineSkeleton from '../Skeleton/LineSkeleton'

const LatestArticleSkeleton: React.FC = () => {
  return (
    <LastestArticleSkeletonWrap>
      <div className='module'>
        <div className='content-skeleton'>
          <BaseSkeleton
            width={16}
            height={16}
          />
          <LineSkeleton className='line-content' />
        </div>
      </div>
    </LastestArticleSkeletonWrap>
  )
}

export default LatestArticleSkeleton
