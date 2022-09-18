import * as React from 'react'

const Ad: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`hidden sm:flex flex-col justify-center items-center rounded h-full w-full min-h-[126px] bg-bg-100 mt-3 ${className}`}>
      <p>种一个月亮 🌛</p>
    </div>
  )
}

export default Ad