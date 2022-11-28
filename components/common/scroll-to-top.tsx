import * as React from 'react'
import { off, on } from 'utils'

interface ScrollToTopProps extends React.HTMLAttributes<HTMLDivElement> {
  top?: number
  smooth?: boolean
}

const scrollToTop = (smooth = true) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  else {
    document.documentElement.scrollTop = 0
  }
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  top = 20,
  smooth = true,
  className,
  ...props
}) => {
  const [visible, setVisible] = React.useState(false)

  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top)
  }

  React.useEffect(() => {
    on(window, 'scroll', onScroll)
    return () => off(window, 'scroll', onScroll)
  }, [])

  return (
    <div
      className={`bg-blue w-8 h-8 hidden rounded-sm fixed bottom-10 right-10 cursor-pointer transition-opacity duration-300 sm:flex justify-center items-center text-white z-[999] ${className} ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={() => scrollToTop(smooth)}
      {...props}
    >
      <i className="iconfont">&#xe696;</i>
    </div>
  )
}

export default ScrollToTop
