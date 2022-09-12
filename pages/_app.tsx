import type { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ReactElement, ReactNode, useEffect } from 'react'
import NProgress from 'components/common/nprogress'
import { GA_TRACKING_ID, pageview } from 'utils/gtag'
import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'styles/globals.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class">
      <NProgress />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp
