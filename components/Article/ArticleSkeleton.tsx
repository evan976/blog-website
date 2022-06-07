import * as React from 'react'
import { ArticleSkeletonContainer } from '../../styles/article'
import BaseSkeleton from '../Skeleton/BaseSkeleton'
import LineSkeleton from '../Skeleton/LineSkeleton'
import ParagraphSkeleton from '../Skeleton/ParagraphSkeleton'

const ArticleSkeleton: React.FC = () => {
  return (
    <ArticleSkeletonContainer>
      <div className='module'>
        <div className='content-skeleton'>
          <div className='main'>
            <LineSkeleton className='meta' />
            <ParagraphSkeleton
              className='content'
              lines={3}
              lineHeight='16px'
              align
            />
          </div>
          <BaseSkeleton
            width={120}
            height={80}
          />
        </div>
      </div>
    </ArticleSkeletonContainer>
  )
}

export default ArticleSkeleton
