import * as React from 'react'
import { Base } from '../../styles/skeleton'

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
    <Base style={{ ...style, ...styles }} className={className}></Base>
  )
}

export default BaseSkeleton
