import React from 'react'
import Swiper from 'react-id-swiper'
import {ReactComponent as DesktopSvg} from '../../assets/img/shapes/desktop.svg'
import {ReactComponent as PhoneSvg} from '../../assets/img/shapes/phone.svg'

import './Carousel.scss'
import {SWIPER_OPTIONS} from '../../utils/constants'

interface CarouselProps {
  mobile?: boolean
  title: string
  images: string[][]
}

const renderSwiper = ({
  mobile,
  title,
  images,
}: CarouselProps): JSX.Element | JSX.Element[] => {
  const imageElements = images.map(image => {
    const caption = `Скриншот ${
      mobile ? 'мобильного ' : ''
    }экрана проекта "${title}"`
    return (
      <figure key={image[0]}>
        <figcaption className="VisuallyHidden">{caption}</figcaption>
        <img
          className="Carousel-Img"
          src={image[0]}
          srcSet={`${image[1]} 2x`}
          width={800}
          alt={caption}
        />
      </figure>
    )
  })
  return imageElements.length > 1 ? (
    <Swiper {...SWIPER_OPTIONS} containerClass="Carousel-Swiper">
      {imageElements}
    </Swiper>
  ) : (
    imageElements
  )
}

export default function Carousel(props: CarouselProps): JSX.Element {
  if (props.mobile)
    return (
      <div className="Carousel Carousel_type_mobile">
        <div className="Carousel-Block">{renderSwiper(props)}</div>
        <PhoneSvg className="Carousel-Svg" />
      </div>
    )
  return (
    <div className="Carousel Carousel_type_desktop">
      <div className="Carousel-Content">
        <div className="SvgPanel">
          <DesktopSvg />
        </div>
        <div className="Carousel-Block">{renderSwiper(props)}</div>
      </div>
    </div>
  )
}
