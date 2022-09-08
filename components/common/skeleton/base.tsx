import * as React from 'react'

export interface BaseSkeletonProps {
  width?: number
  height?: number
  circle?: boolean
  radius?: number
  className?: string
  style?: React.CSSProperties
}

const BaseSkeleton: React.FC<BaseSkeletonProps> = ({
  width,
  height,
  circle = false,
  radius = 2,
  className,
  style
}) => {
  const styles = React.useMemo<React.CSSProperties>(() => ({
    borderRadius: circle ? '100%' : `${radius}px`,
    ...(width && { width: width + 'px' }),
    ...(height && { height: height + 'px' }),
  }), [width, height, circle, radius])

  return (
    <div
      className={`w-full h-full animate-pulse bg-bg-200 ${className}`}
      style={{ ...style, ...styles }}
    />
  )
}

export default BaseSkeleton