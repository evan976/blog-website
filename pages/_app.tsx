import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from 'components/layout'
import useMobile from 'hooks/useMobile'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {

  const mobile = useMobile()

  return (
    <ThemeProvider attribute='class'>
      <Layout mobile={mobile}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
