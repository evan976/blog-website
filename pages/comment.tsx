import * as React from 'react'
import type { NextPage } from 'next'
import { AboutContainer } from '../styles/about'

const Comment: NextPage = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
      <p>This is the comment page</p>
    </AboutContainer>
  )
}

export default Comment
