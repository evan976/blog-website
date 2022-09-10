import * as React from 'react'
import { animated, useTransition } from 'react-spring'

interface SlideProps {
  visible: boolean
  options: Record<string, unknown>
  children?: React.ReactNode
}

const Slide: React.FC<SlideProps> = ({ visible, options, children }) => {
  const transitions = useTransition(visible, {
    config: { mass: 2, tension: 280, friction: 24, clamp: true },
    ...options,
  })
  return (
    <>
      {transitions(
        (style, item) => item && <animated.div style={{ ...style, overflow: 'hidden' }}>{children}</animated.div>
      )}
    </>
  )
}

export default Slide