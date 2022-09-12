import * as React from 'react'

interface DividerProps {
  type?: 'solid' | 'dashed'
  direction?: 'horizontal' | 'vertical'
  className?: string
}

const Divider: React.FC<DividerProps> = ({
  type = 'solid',
  direction = 'horizontal',
  className
}) => {

  const classNames = React.useMemo(() => {
    if (direction === 'vertical') {
      return 'inline-block min-w-[1px] max-w-[1px] h-[1em] mx-3 align-middle border-l'
    } else {
      return 'w-full min-w-full max-w-full relative my-3 clear-both border-t'
    }
  }, [direction])

  return (
    <div
      role="separator"
      className={`${classNames} ${type === 'solid' ? 'border-solid' : 'border-dashed'} border-border ${className}`}
    />
  )
}

export default Divider
