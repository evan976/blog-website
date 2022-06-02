import * as React from 'react'
import useReactive from '../hooks/useReactive'
import { SwiperContainer } from '../styles/components'
import { LeftArrow } from './Icons/LeftArrow'
import { RightArrow } from './Icons/RightArrow'
import LoadingImage from './LoadingImage'

interface SwiperProps {
  swipers: Array<any>
  autoplay?: boolean
  duration?: number
  control?: boolean
}

const Swiper: React.FC<SwiperProps> = ({
  swipers,
  autoplay = true,
  duration = 3000,
  control = false
}) => {

  const index = useReactive({ value: 0 })
  const timer = React.useRef<NodeJS.Timer>()

  const autoplayFn = React.useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      index.value++
      if (index.value >= swipers.length) {
        index.value = 0
      }
    }, duration)
  }, [duration, index, swipers.length])

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }
  }

  const start = () => {
    if (swipers.length > 1 && autoplay) {
      autoplayFn()
    }
  }

  const toggle = (step: number) => {
    index.value += step

    if (index.value >= swipers.length) {
      index.value = 0
      return
    }
    if (index.value < 0) {
      index.value = swipers.length - 1
    }
  }

  React.useEffect(() => {
    if (swipers.length > 1 && autoplay) {
      index.value = 0
      autoplayFn()
    }
  }, [swipers.length, autoplay, index, autoplayFn])

  React.useEffect(() => {
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  return (
    <SwiperContainer
      className='swiper'
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <div className='swiper-body'>
        {
          swipers.map((item, i) => {
            return (
              <div
                className={`swiper-item ${i === index.value ? 'fade' : ''}`}
                key={i}
              >
                <a href={item?.link}>
                  <LoadingImage
                    className='image'
                    src={item?.url}
                    alt={item?.title}
                  />
                </a>
              </div>
            )
          })
        }
      </div>
      {
        swipers.length > 1 && control && (
          <>
            <span className='swiper-btn prev' onClick={() => toggle(-1)}>
              <LeftArrow />
            </span>
            <span className='swiper-btn next' onClick={() => toggle(1)}>
              <RightArrow />
            </span>
          </>
        )
      }
      <div className='swiper-pagination'>
        {
          swipers.map((_, i) => {
            return (
              <span
                key={i}
                className={index.value === i ? 'active' : ''}
                onClick={() => {
                  index.value = i
                }}
              ></span>
            )
          })
        }
      </div>
    </SwiperContainer>
  )
}

export default Swiper