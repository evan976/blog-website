import * as React from 'react'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Helmet } from 'react-helmet-async'
import MdEditor from 'md-editor-rt'
import useDarkMode from 'use-dark-mode'
import { AboutContainer } from '../styles/about'
import { GlobalContext } from '../context/globalContext'
import bg from '../public/static/comment.png'
import 'md-editor-rt/lib/style.css'

const About: NextPage = () => {

  const { setting } = React.useContext(GlobalContext)
  const { value } = useDarkMode(false)

  return (
    <AboutContainer>
      <Helmet>
        <title>{setting.title + ' - ' + '关于'}</title>
      </Helmet>
      {/* <div className='about-bg'>
        <Image
          src={bg}
          alt="about"
          height={320}
        />
      </div> */}
      <div className='about-content'>
        <MdEditor
          modelValue={setting.description!}
          theme={value ? 'dark' : 'light'}
          previewTheme='smart-blue'
          previewOnly
          className='about-content-md'
        />
      </div>
    </AboutContainer>
  )
}

export default About
