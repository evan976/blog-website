import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { HelmetProvider } from 'react-helmet-async'
import { lightTheme, darkTheme } from '../theme'
import { ResetStyle, GlobalStyle, MarkdownStyle } from '../styles/global'
import useMountedState from '../hooks/useMountedState'
import { GlobalContext } from '../context/globalContext'
import useGlobalData from '../hooks/useGlobalData'
import NProgress from './NProgress'
import Header from './Header'
import Seo from './Seo'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { value } = useDarkMode(true)
  const theme = value ? darkTheme : lightTheme

  const global = useGlobalData()

  const isMounted = useMountedState()

  const body = (
    <GlobalContext.Provider
      value={{
        categories: global.categories,
        setting: global.setting
      }}
    >
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <ResetStyle />
          <GlobalStyle />
          <MarkdownStyle />
          <NProgress />
          <Seo setting={global.setting} />
          <Header setting={global.setting} />
          {children}
          <div className='footer'>
            <Footer setting={global.setting} />
          </div>
          <ScrollToTop smooth />
        </HelmetProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  )

  if (!isMounted) {
    return <div style={{visibility: 'hidden'}}>{body}</div>
  }

  return body
}

export default Layout
