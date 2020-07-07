import * as React from "react"
import { data } from "./data"
import { startIcon } from "./icons"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "./styles.scss"
import "./fonts.scss"

SwiperCore.use([Navigation])

const App = () => {
  const showRating = (count = 1) => {
    const loop = new Array(count).fill(1)

    console.log(loop)

    return loop.map(() => startIcon())
  }

  const renderSwiperSlide = (content, index) => {
    const {
      image = "",
      name = "",
      color = "",
      tile = "",
      price = "",
      rating = "",
      review = "",
    } = content

    return (
      <SwiperSlide key={`slide-${index}`}>
        <div className="t1-slider-wrapper">
          <div className="t1-slider-block">
            <img className="t1-slider-element" src={image} alt={name} />
            <div className="t1-tile-element" style={{ color: `#${color}` }}>
              {tile}
            </div>
            <h3 className="t1-name-element">{name}</h3>
            <div className="t1-price-block">
              {`$${price} `}
              <span>per person</span>
            </div>
            <div className="t1-rr-block">
              <div className="t1-rating-block">{showRating(+rating)}</div>
              <div className="t1-review-element">{review}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  }

  return (
    <div className="t1-global-wrapper ">
      <div className="t1-title-wrapper">
        <h1 className="t1-title-element">Experiences in Paris</h1>
        <div className="t1-sell-all-wrapper">
          <a href="/">
            <div>see all </div>
          </a>
        </div>
      </div>
      <div className="t1-swiper-wrapper">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map(renderSwiperSlide)}
        </Swiper>
      </div>
    </div>
  )
}

export default App
export { App }
