import * as React from 'react'
import BaseSkeleton from 'components/common/skeleton/base'
import LineSkeleton from 'components/common/skeleton/line'

const ArticleSkeleton: React.FC = () => {
  return (
    <div className="bg-bg-100 rounded p-3 flex justify-start mt-3">
      <BaseSkeleton width={180} height={102} />
      <div className="flex-1 flex flex-col justify-between ml-3">
        <LineSkeleton className="w-[60%] h-4" />
        <LineSkeleton className="w-[40%] h-4" />
        <LineSkeleton className="w-[100%] h-4" />
      </div>
    </div>
  )
}

export default ArticleSkeleton
