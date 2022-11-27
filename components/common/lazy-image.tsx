import * as React from 'react'
import type { ImageProps } from 'react-lazy-images'
import { LazyImage as RCLazyImage } from 'react-lazy-images'

interface LazyImageProps {
  src: string
  alt?: string
  className?: string
  children?: React.ReactNode
  loadEagerly?: boolean
}

interface CustomerImageProps {
  imageProps: ImageProps
  className?: string
  children?: React.ReactNode
}

const Image = ({ imageProps, className, children }: CustomerImageProps) => (
  <div className='w-full h-full'>
    <img className={`w-full h-full ${className}`} {...imageProps} />
    {children}
  </div>
)

const LoadingDots = () => (
  <span className="loading-dots">
    <i />
    <i />
    <i />
  </span>
)

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  children,
  loadEagerly,
}) => {
  return (
    <RCLazyImage
      src={src}
      alt={alt}
      loadEagerly={loadEagerly}
      actual={({ imageProps }: { imageProps: ImageProps }) => (
        <Image
          imageProps={imageProps}
          className={className}
        >
          {children}
        </Image>
      )}
      placeholder={({ ref }: { ref?: React.RefObject<any> }) => (
        <div className='w-full h-full bg-bg-100 flex items-center justify-center' ref={ref}>
          <LoadingDots />
        </div>
      )}
    />
  )
}

export default LazyImage
