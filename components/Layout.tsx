import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { HelmetProvider } from 'react-helmet-async'
import { lightTheme, darkTheme } from '../theme'
import { ResetStyle, GlobalStyle, MarkdownStyle } from '../styles/global'
import { Main } from '../styles/components'
import useMountedState from '../hooks/useMountedState'
import { GlobalContext } from '../context/globalContext'
import useGlobalData from '../hooks/useGlobalData'
import NProgress from './NProgress'
import Header from './Header'
import Seo from './Seo'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { value } = useDarkMode(true)
  const theme = value ? darkTheme : lightTheme

  const {
    categories,
    setting,
    recommendArticles,
    comments
  } = useGlobalData()

  const isMounted = useMountedState()

  const body = (
    <GlobalContext.Provider
      value={{
        categories,
        setting,
        recommendArticles,
        comments
      }}
    >
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <ResetStyle />
          <GlobalStyle />
          <MarkdownStyle />
          <NProgress />
          <Seo />
          <Header />
          <Main>{children}</Main>
          <div className='footer'>
            <Footer setting={setting} />
          </div>
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
