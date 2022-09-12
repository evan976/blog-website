import React from 'react'
import { NextPageWithLayout } from './_app'
import Layout from 'components/layout'

const AboutPage: NextPageWithLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[210px] rounded overflow-hidden relative">
        <img
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src={'/about.jpeg'}
          alt={'about'}
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col">
          <i className="iconfont mx-auto text-white !text-7xl">&#xe61d;</i>
          <p className="text-center text-white text-sm mt-4">
            保持热爱，奔赴山海
          </p>
        </div>
      </div>
      <div className="bg-bg-100 rounded my-3">11</div>
    </div>
  )
}

AboutPage.getLayout = (page) => (
  <Layout mobile={false}>
    {page}
  </Layout>
)

export default AboutPage
