import * as React from 'react'
import { Line } from '../../styles/skeleton'

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
    <Line
      className={className}
      style={{ ...style, ...styles }}
    ></Line>
  )
}

export default LineSkeleton
