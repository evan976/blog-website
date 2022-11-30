import { fetchGithubContributions } from 'api/tripartite'
import BlurImage from 'components/common/blur-image'
import Ad from 'components/common/ad'
import Layout from 'components/layout'
import { CONNECT_LINKS, META } from 'config/app.config'
import type { GetStaticProps } from 'next'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import ReactTooltip from 'react-tooltip'
import type { NextPageWithLayout } from './_app'

interface Props {
  contributions: any
}

const AboutPage: NextPageWithLayout<Props> = () => {
  return (
    <div className="w-full h-full">
      <Helmet>
        <title>{'关于' + ` - ${META.title}`}</title>
      </Helmet>
      <div className="w-full h-[168px] sm:h-[210px] mt-3 sm:mt-0 rounded overflow-hidden relative">
        <BlurImage src="/images/about.jpeg" alt="about">
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col">
            <i className="iconfont mx-auto text-white !text-7xl">&#xe61d;</i>
            <p className="text-center text-white text-sm mt-4">寄蜉蝣于天地，渺沧海之一粟</p>
          </div>
        </BlurImage>
      </div>
      <div className="bg-bg-100 rounded my-3 p-3">
        <div className="flex flex-col items-center ">
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-border">
            <BlurImage
              src="/images/avatar.jpeg"
              alt="avatar"
              className="sm:hover:rotate-[360deg] duration-500"
            />
          </div>
          <h1 className="mt-2 text-lg text-font-100 font-bold">Evan</h1>
          <p className="italic">电子迷 / 代码控 / 强迫患者</p>
          <ul className="grid grid-cols-3 gap-3 mt-3">
            <li data-tip data-for="wechat" className="px-3 py-2 bg-green flex justify-center items-center rounded cursor-pointer">
              <i className="iconfont text-white">&#xe602;</i>
            </li>
            <ReactTooltip
              id="wechat"
              place="top"
              effect="solid"
              backgroundColor="transparent"
              offset={{ top: -12 }}
            >
              <div className="w-32 h-32 p-3 bg-bg-300 rounded-sm">
                <img className="rounded-sm" src="/images/wechat.png" alt="wechat" />
              </div>
            </ReactTooltip>
            <li data-tip data-for="telegram" className="px-3 py-2 bg-[#29A8EB] flex justify-center items-center rounded cursor-pointer">
              <i className="iconfont text-white">&#xe9ac;</i>
            </li>
            <ReactTooltip
              id="telegram"
              place="top"
              effect="solid"
              backgroundColor="transparent"
              offset={{ top: -12 }}
            >
              <div className="w-32 h-32 p-3 bg-bg-300 rounded-sm">
                <img className="rounded-sm" src="/images/telegram.png" alt="telegram" />
              </div>
            </ReactTooltip>
            <li data-tip data-for="weibo" className="px-3 py-2 bg-[#e6162d] flex justify-center items-center rounded cursor-pointer">
              <i className="iconfont text-white">&#xe6c4;</i>
            </li>
            <ReactTooltip
              id="weibo"
              place="top"
              effect="solid"
              backgroundColor="transparent"
              offset={{ top: -12 }}
            >
              <div className="w-32 h-32 p-3 bg-bg-300 rounded-sm">
                <img className="rounded-sm" src="/images/weibo.png" alt="weibo" />
              </div>
            </ReactTooltip>
          </ul>
          <ul className="grid grid-cols-4 gap-2 sm:gap-3 mt-3">
            <li className="px-2 sm:px-3 py-2 bg-black flex justify-center items-center rounded">
              <a href={CONNECT_LINKS.github} target="_blank" rel="noreferrer">
                <i className="iconfont text-white">&#xe601;</i>
                <span className="text-white ml-1">Github</span>
              </a>
            </li>
            <li className="px-2 sm:px-3 py-2 bg-[#056CE8] flex justify-center items-center rounded">
              <a href={CONNECT_LINKS.zhihu} target="_blank" rel="noreferrer">
                <i className="iconfont text-white">&#xea8b;</i>
                <span className="text-white ml-1">知乎</span>
              </a>
            </li>
            <li className="px-2 sm:px-3 py-2 bg-[#1F80FF] flex justify-center items-center rounded">
              <a href={CONNECT_LINKS.juejin} target="_blank" rel="noreferrer">
                <i className="iconfont text-white">&#xe60b;</i>
                <span className="text-white ml-1">掘金</span>
              </a>
            </li>
            <li className="px-2 sm:px-3 py-2 bg-red flex justify-center items-center rounded">
              <a href={CONNECT_LINKS.music_163} target="_blank" rel="noreferrer">
                <i className="iconfont text-white">&#xe622;</i>
                <span className="text-white ml-1">网抑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* TODO: github contribution calendar */}
      {/* <GithubContribution contributions={contributions} /> */}
      <div className="bg-bg-100 rounded my-3 p-3">
        <h1 className="text-base text-blue">关于我</h1>
        <ul className="list-disc list-inside mt-2">
          <li>Base 成都 95 后</li>
          <li className="my-1">页面仔</li>
          <li>游戏公司、主要写界面、偶尔写游戏</li>
          <li className="mt-1">相信代码改变世界</li>
        </ul>
      </div>
      <div className="bg-bg-100 rounded my-3 p-3">
        <h1 className="text-base text-green">关于网站</h1>
        <ul className="list-[square] list-inside mt-2">
          <li>前台：React + Next + TypeScript</li>
          <li className="my-1">后台：React + TypeScript + Ant Design</li>
          <li>服务端：Nest + TypeScript + MySQL + TypeORM</li>
        </ul>

      </div>
      <div className="bg-bg-100 rounded my-3 p-3">
        <h1 className="text-base text-orangered">关于未来</h1>
        <ul className="list-[decimal] list-inside mt-2">
          <li>不确定</li>
          <li className="my-1">希望保持对代码的热爱</li>
          <li>奔赴山海、高处见</li>
        </ul>
      </div>
      <Ad />
    </div>
  )
}

AboutPage.getLayout = page => <Layout>{page}</Layout>

export const getStaticProps: GetStaticProps = async () => {
  const { contributions } = await fetchGithubContributions()

  return {
    props: {
      contributions,
    },
  }
}

export default AboutPage
