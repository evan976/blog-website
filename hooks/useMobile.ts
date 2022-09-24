import * as React from 'react'

const useMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 640)
    }

    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  return isMobile
}

export default useMobile
