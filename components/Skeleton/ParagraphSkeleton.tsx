import * as React from 'react'
import LineSkeleton from './LineSkeleton'

export interface ParagraphSkeletonProps {
  width?: number
  height?: number
  lines?: number
  align?: boolean
  lineHeight?: string
  className?: string
  style?: React.CSSProperties
}

const ParagraphSkeleton: React.FC<ParagraphSkeletonProps> = ({
  width,
  height,
  lines = 1,
  align = false,
  lineHeight = '1rem',
  style,
  className
}) => {

  const styles = React.useMemo<React.CSSProperties>(() => ({
    ...(width && { width: width + 'px' }),
    ...(height && { height: height + 'px' })
  }), [width, height])

  const getLineStyle = (index: number) => {
    const style: React.CSSProperties = {
      height: lineHeight,
      marginBottom: index === lines - 1 ? '0' : `calc(${lineHeight} * 0.75)`
    }
    const position = index % 3
    if (position) {
      const margin = 15 * position
      style.width = `${100 - margin}%`
      style.marginLeft = align ? '0' : '6%'
    }
    return style
  }

  return (
    <div style={{ ...style, ...styles }} className={className}>
      {
        Array(lines).fill(1).map((_, index) => (
          <LineSkeleton
            key={index}
            style={getLineStyle(index)}
            className='paragraph-line'
          />
        ))
      }
    </div>
  )
}

export default ParagraphSkeleton
