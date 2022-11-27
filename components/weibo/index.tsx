import DateTime from 'components/common/date'
import LazyImage from 'components/common/lazy-image'
import type SwiperClass from 'components/common/swiper'
import { Swiper, SwiperSlide } from 'components/common/swiper'
import useReactive from 'hooks/useReactive'
import * as React from 'react'

const Weibo: React.FC<{ weibo: any[] }> = ({ weibo }) => {
  const swiper = React.useRef<SwiperClass>()

  const listSwiperState = useReactive({ canPrev: false, canNext: true })

  const handlePrevSlide = () => swiper.current?.slidePrev()
  const handleNextSlide = () => swiper.current?.slideNext()

  const handleListSlideChange = (_swiper: SwiperClass) => {
    listSwiperState.canNext = !_swiper.isEnd
    listSwiperState.canPrev = !_swiper.isBeginning
  }

  const handleListSwiperReady = (_swiper: SwiperClass) => {
    swiper.current = _swiper
    handleListSlideChange(_swiper)
  }

  const userInfo = React.useMemo(() => weibo[0]?.user, [weibo])

  return (
    <div className="w-full hidden sm:flex justify-between h-16 mt-3">
      <div className="w-16 bg-bg-100 rounded flex justify-center items-center p-3">
        <div className="rounded-sm">
          <LazyImage
            src={userInfo?.avatar_hd}
            alt="avatar"
            className="rounded-sm"
          />
        </div>
      </div>
      <div className="rounded-sm flex-1 bg-bg-100 mx-3 p-3">
        <Swiper
          className="w-full h-full hidden sm:block"
          setWrapperSize={true}
          mousewheel={true}
          allowTouchMove={false}
          preventClicks={false}
          observeParents={true}
          grabCursor={false}
          simulateTouch={false}
          direction="vertical"
          pagination={false}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          onSwiper={handleListSwiperReady}
          onSlideChange={handleListSlideChange}
        >
          {weibo?.map(item => (
            <SwiperSlide
              key={item.id}
              className="flex flex-col w-full justify-between"
            >
              <a
                className="truncate text-font-200"
                href={`https://weibo.com/u/${userInfo.id}`}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
              <div className="flex text-xs text-font-300">
                <div className="flex items-center">
                  <i className="iconfont !text-sm">&#xe680;</i>
                  <DateTime date={item.created_at} />
                </div>
                <div className="flex items-center ml-5">
                  <i className="iconfont !text-sm mt-[2px]">&#xe6aa;</i>
                  <span>{item.comments_count}</span>
                </div>
                <div className="flex items-center ml-5">
                  <i className="iconfont !text-sm">&#xe7c8;</i>
                  <span>{item.attitudes_count}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-9 h-full flex flex-col justify-between">
        <button className="bg-bg-100 flex-1 mb-2 rounded-sm" onClick={handlePrevSlide}>
          <i className="iconfont !text-sm">&#xe6b1;</i>
        </button>
        <button className="bg-bg-100 flex-1 rounded-sm" onClick={handleNextSlide}>
          <i className="iconfont !text-sm">&#xe684;</i>
        </button>
      </div>
    </div>
  )
}

export default Weibo
