import * as React from 'react'
import type { NextPage } from 'next'
import { AboutContainer } from '../styles/about'

const About: NextPage = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
      <p>This is the about page</p>
    </AboutContainer>
  )
}

export default About
