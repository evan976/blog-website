import React from 'react'

type CardProps = {
  title: string
  icon: string
  className: string
  style: React.CSSProperties
  children: React.ReactNode
}

const Card: React.FC<Partial<CardProps>> = ({ title, icon, className, style, children }) => {
  return (
    <div className={`bg-bg-100 rounded text-font-secondary ${className}`} style={style}>
      {(title || icon) && (
        <div className='p-[10px] text-font-secondary border-b border-border flex justify-start items-center'>
          <i className='iconfont' dangerouslySetInnerHTML={{__html: icon ?? ''}} />
          <h2 className='ml-1'>{title}</h2>
        </div>
      )}
      <div className='p-[10px]'>
        {children}
      </div>
    </div>
  )
}

export default Card
