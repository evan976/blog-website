import * as React from 'react'
import { EmptyContainer } from '../styles/components'

const Empty: React.FC<{ description?: string }> = ({ description }) => {
  return (
    <EmptyContainer>
      <p>{description || '空空如也'}</p>
    </EmptyContainer>
  )
}

export default Empty
