import * as React from 'react'

interface ScrollToTopProps extends React.HTMLAttributes<HTMLDivElement> {
  top?: number
  smooth?: boolean
  width?: number
  height?: number
}

const scrollToTop = (smooth: boolean = true) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    document.documentElement.scrollTop = 0
  }
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  top = 20,
  smooth = true,
  width = 32,
  height = 32,
  className,
  onClick,
  ...props
}) => {

  const [visible, setVisible] = React.useState(false)

  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top)
  }

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`bg-blue hidden rounded-sm fixed bottom-10 right-10 cursor-pointer transition-opacity duration-300 sm:flex justify-center items-center text-white z-[999] ${className}`}
      onClick={() => scrollToTop(smooth)}
      style={{
        width,
        height,
        opacity: visible ? 1 : 0,
      }}
      {...props}
    >
      <i className="iconfont">&#xe696;</i>
    </div>
  )
}

export default ScrollToTop