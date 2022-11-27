import * as React from 'react'
import { useRouter } from 'next/router'
import NP from 'nprogress'

NP.configure({ showSpinner: false })

const useProgress = () => {
  const router = useRouter()

  const timer = React.useRef<NodeJS.Timeout>()

  const start = () => {
    timer.current = setTimeout(() => {
      NP.start()
    }, 50)
  }

  const done = () => {
    if (timer.current)
      clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      NP.done(true)
    }, 300)
  }

  React.useEffect(() => {
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', done)
    router.events.on('routeChangeError', done)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', done)
      router.events.off('routeChangeError', done)
    }
  }, [router.events])
}

export default useProgress
