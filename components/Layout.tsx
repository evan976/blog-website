import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme } from '../theme'
import { ResetStyle, GlobalStyle } from '../styles/global'
import Header from './Header'
import { Main } from '../styles/components'
import Recommend from './Recommend'
import useMountedState from '../hooks/useMountedState'
import NProgress from './NProgress'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { value } = useDarkMode(false)
  const theme = value ? darkTheme : lightTheme

  const isMounted = useMountedState()

  const body = (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <NProgress />
      <Header />
      <Main>
        {children}
        <Recommend />
      </Main>
    </ThemeProvider>
  )

  if (!isMounted) {
    return <div style={{visibility: 'hidden'}}>{body}</div>
  }

  return body
}

export default Layout
