import * as React from 'react'

interface LazyloadProps {
  src: string
  lazy?: boolean
  alt?: string
  className?: string
  imageClassName?: string
  round?: number
}

const Lazyload: React.FC<LazyloadProps> = ({
  src,
  alt,
  className,
  imageClassName,
  lazy = true,
  round = 4,
}) => {
  const [imageSrc, setImageSrc] = React.useState(src)
  const [loading, setLoading] = React.useState(true)
  const observer = React.useRef<IntersectionObserver>()
  const imageRef = React.useRef<HTMLImageElement>(null)

  const rounded = React.useMemo(() => {
    return `rounded-[${round}px]`
  }, [round])

  React.useEffect(() => {
    if (lazy) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setImageSrc(src)
          observer.current?.disconnect()
        }
      })
      observer.current.observe(imageRef.current as HTMLImageElement)
    }
  }, [src, lazy])

  React.useEffect(() => {
    return () => {
      observer.current?.disconnect()
    }
  }, [])

  return (
    <div className={`w-full h-full relative overflow-hidden ${rounded} ${className}`}>
      <img
        className={`absolute top-0 left-0 w-full h-full object-cover z-[-1] ${rounded} ${!lazy || !loading ? 'opacity-100 relative z-[99]' : undefined} ${imageClassName}`}
        ref={imageRef}
        src={imageSrc}
        alt={alt || ''}
        onLoad={() => setLoading(false)}
      />
      {loading && <div className={`absolute w-full h-full overflow-hidden top-0 left-0 z-[2] animate-pulse bg-bg-200 ${rounded}`} />}
    </div>
  )
}

export default Lazyload
