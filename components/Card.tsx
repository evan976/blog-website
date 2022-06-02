import * as React from 'react'
import { CardContainer } from '../styles/components'

export interface CardProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ title, icon, children, className }) => {
  return (
    <CardContainer className={className}>
      <div className='header'>
        {icon}
        <h2>{title}</h2>
      </div>
      <div className='content'>
        {children}
      </div>
    </CardContainer>
  )
}

export default Card
