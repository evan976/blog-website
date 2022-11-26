import * as React from 'react'

interface EmptyProps {
  description?: string
  className?: string
}

const Empty: React.FC<EmptyProps> = ({ description, className }) => {
  return (
    <div className={`flex flex-col justify-center items-center rounded h-full w-full min-h-[156px] bg-bg-100 ${className}`}>
      <p>{description || '空空如也'}</p>
    </div>
  )
}

export default Empty
