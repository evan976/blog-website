import {
  A11y,
  Autoplay,
  EffectFade,
  Grid,
  Lazy,
  Mousewheel,
  Navigation,
  Pagination,
  Swiper as SwiperClass,
} from 'swiper'

SwiperClass.use([Grid, Pagination, Navigation, Mousewheel, Autoplay, A11y, Lazy, EffectFade])

export default SwiperClass

export { Swiper, SwiperSlide } from 'swiper/react'
