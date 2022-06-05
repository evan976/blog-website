import Link from 'next/link'
import * as React from 'react'
import { FooterContainer } from '../styles/components'
import { GithubOutlined } from './Icons/GithubOutlined'
import { RssOutlined } from './Icons/RssOutlined'

const Footer: React.FC<{ setting: ISetting }> = ({ setting }) => {
  return (
    <FooterContainer>
      <div className='link'>
        <a href="/sitemap.xml" target='_blank' rel="noreferrer">
          <RssOutlined />
        </a>
        <a href="https://github.com/wujihua118" target='_blank' rel="noreferrer">
          <GithubOutlined />
        </a>
      </div>
      <p>Designed by wujihua</p>
      <p>Copyright © 2022. All Rights Reserved.</p>
      <p>
        <a href="https://beian.miit.gov.cn/" target='_blank' rel='noreferrer'>
          {setting.copyright}
        </a>
      </p>
    </FooterContainer>
  )
}

export default Footer
