import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import 'nprogress/nprogress.css'


const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
