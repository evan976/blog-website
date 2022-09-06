import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'components/common/nprogress'
import Layout from 'components/layout'
import useMobile from 'hooks/useMobile'
import { GA_TRACKING_ID, pageview } from 'utils/gtag'
import 'nprogress/nprogress.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const mobile = useMobile()
  const router = useRouter()

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
      <Layout mobile={mobile}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
