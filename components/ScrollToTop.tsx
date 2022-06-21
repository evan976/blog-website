import * as React from 'react'
import { ArrowTopOutlined } from './Icons/ArrowTopOutlined'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  top?: number
  smooth?: boolean
  width?: number
  height?: number
  icon?: React.ReactNode
}

const scrollToTop = (smooth: boolean = false) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    document.documentElement.scrollTop = 0
  }
}

const ScrollToTop: React.FC<Props> = ({
  top = 20,
  smooth = false,
  width = 32,
  height = 32,
  icon = <ArrowTopOutlined />,
  className,
  onClick,
  ...props
}) => {

  const [visible, setVisible] = React.useState<boolean>(false)

  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top)
  }

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className={`scroll-to-top ${className}`}
      onClick={() => scrollToTop(smooth)}
      style={{
        width,
        height,
        opacity: visible ? 1 : 0,
      }}
      {...props}
    >
      {icon}
    </div>
  )
}

export default ScrollToTop
