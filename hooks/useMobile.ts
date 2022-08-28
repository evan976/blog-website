import { useEffect, useState } from 'react'

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768)
    }

    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  } , [])

  return isMobile
}

export default useMobile