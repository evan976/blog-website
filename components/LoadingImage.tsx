import * as React from 'react'
import classNames from 'classnames'
import { LoadImageContainer } from '../styles/components'

interface LoadingImageProps {
  src: string
  lazy?: boolean
  alt?: string
  className?: string
}

const LoadingImage: React.FC<LoadingImageProps> = ({
  src,
  lazy = true,
  alt = '',
  className = ''
}) => {

  const [imgSrc, setImgSrc] = React.useState<string>(src)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const observer = React.useRef<IntersectionObserver>()
  const lazyImgRef = React.useRef<HTMLImageElement>(null)

  React.useEffect(() => {
    if (lazy) {
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setImgSrc(src)
          observer.current?.disconnect()
        }
      })
      observer.current.observe(lazyImgRef.current as HTMLImageElement)
    }
  }, [src, lazy])

  React.useEffect(() => {
    return () => {
      observer.current?.disconnect()
    }
  }, [])


  return (
    <LoadImageContainer>
      <img
        ref={lazyImgRef}
        className={classNames('lazy-image', className, {
          active: !lazy || !isLoading,
        })}
        src={imgSrc}
        alt={alt ?? ''}
        onLoad={() => setIsLoading(false)}
      />
      {
        isLoading && (
          <div className='lazy-image-bg'></div>
        )
      }
    </LoadImageContainer>
  )
}

export default LoadingImage
