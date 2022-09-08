import * as React from 'react'

export interface LineSkeletonProps {
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

const LineSkeleton: React.FC<LineSkeletonProps> = ({
  width,
  height,
  style,
  className
}) => {

  const styles = React.useMemo<React.CSSProperties>(() => ({
    ...(width && { width: width + 'px' }),
    ...(height && { height: height + 'px' }),
  }), [width, height])

  return (
    <div
      className={`w-[70%] h-full animate-pulse bg-bg-200 ${className}`}
      style={{ ...style, ...styles }}
    />
  )
}

export default LineSkeleton