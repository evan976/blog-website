import Image from 'next/image'
import * as React from 'react'
import cn from 'classnames'

interface BlurImageProps {
  src: string
  href?: string
  alt?: string
  children?: React.ReactNode
  className?: string
}

const BlurImage: React.FC<BlurImageProps> = ({ href, src, alt, className, children }) => {
  const [loading, setLoading] = React.useState(true)
  return (
    <a href={href} className="group block w-full h-full relative">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className={cn(
          'duration-700 w-full h-full ease-in-out',
          loading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          className,
        )}
        onLoadingComplete={() => setLoading(false)}
      />
      {!loading && children}
    </a>
  )
}

export default BlurImage
