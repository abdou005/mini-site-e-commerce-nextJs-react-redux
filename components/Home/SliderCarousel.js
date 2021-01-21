import React from 'react'
import { Carousel } from 'react-responsive-carousel'
//import '../../styles/css/Carousel.css'
//import slide from "../../assets/img/h4-slide.png"
//import slide2 from "../../assets/img/h4-slide2.png"
//import slide3 from "../../assets/img/h4-slide3.png"
//import slide4 from "../../assets/img/h4-slide4.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const SliderCarousel = () => {
    return (
        <div className="slider-area">
            <div className="block-slider block-slider4">
                <Carousel className="carousel-inner" showArrows={true} showThumbs={true}>
                    <div>
                        <img className="d-block w-100" src='img/h4-slide.png' />
                    </div>
                    <div>
                        <img className="d-block w-100" src='img/h4-slide2.png' />
                    </div>
                    <div>
                        <img className="d-block w-100" src='img/h4-slide3.png' />
                    </div>
                    <div>
                        <img className="d-block w-100" src='img/h4-slide4.png' />
                    </div>
                </Carousel>
            </div>
        </div>

    );
}

export default SliderCarousel;