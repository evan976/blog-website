import type { NextPage } from 'next'
import Image from 'next/image'
import * as React from 'react'

const NotFoundPage: NextPage = () => {
  return (
    <div className="w-full mt-64 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image src="/images/404.svg" width={256} height={120} alt="404" />
        <a href="/" className="mt-12 text-base text-blue">
          苦海无边，回头是岸
          <i className="iconfont">&#xe689;</i>
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage