import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const SliderCarousel = () => {
    return (
        <div className="slider-area">
            <div className="block-slider block-slider4">
                <Carousel className="carousel-inner" showArrows={true} showThumbs={true}>
                    <div>
                        <img className="d-block w-100" src='/img/h4-slide.png' />
                    </div>
                    <div>
                        <img className="d-block w-100" src='/img/h4-slide2.png' />
                    </div>
                    <div>
                        <img className="d-block w-100" src='/img/h4-slide3.png' />
                    </div>
                    <div>
                        <img className="d-block w-100" src='/img/h4-slide4.png' />
                    </div>
                </Carousel>
            </div>
        </div>

    );
}

export default SliderCarousel;