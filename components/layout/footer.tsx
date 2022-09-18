import * as React from 'react'
import Divider from 'components/common/divider'

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="hidden sm:block h-16 w-full bg-bg-100 mt-3">
      <div className="w-full px-4 sm:w-[1050px] sm:px-0 h-full mx-auto flex justify-center items-center">
        <span>&copy; {new Date().getFullYear()}</span>
        <Divider direction="vertical" />
        <a
          className="text-font-200 underline-offset-4 hover:underline hover:text-font-100 duration-200"
          target="_blank"
          href="https://beian.miit.gov.cn"
          rel="noreferrer"
        >
          滇ICP备20006236号-2
        </a>
        <Divider direction="vertical" />
        <span className="text-font-200">
          由
          <a
            className="text-font-100 underline-offset-4 hover:underline hover:text-blue duration-200 mx-1"
            target="_blank"
            href="https://nextjs.org/"
            rel="noreferrer"
          >NTXT</a>
          和
          <a
            className="text-font-100 underline-offset-4 hover:underline hover:text-blue duration-200 mx-1"
            target="_blank"
            href="https://reactjs.org/"
            rel="noreferrer"
          >REACT</a>
          强力驱动
        </span>
        <Divider direction="vertical" />
        <a
          className="text-font-200 underline-offset-4 hover:underline hover:text-font-100 duration-200"
          target="_blank"
          href="/sitemap.xml"
        >
          耕云种月
        </a>
      </div>
    </footer>
  )
}

export default Footer