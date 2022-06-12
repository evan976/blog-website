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
      <p>Designed by evanone.site</p>
      <p>{setting.copyright}</p>
      <p>
        <a href={setting.icpUrl} target='_blank' rel='noreferrer'>
          {setting.icp}
        </a>
      </p>
    </FooterContainer>
  )
}

export default Footer
