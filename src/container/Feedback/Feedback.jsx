import React, { useRef } from 'react';
import {images} from '../../constants'
import { feedbackData } from '../../constants';
import Slider from 'react-slick';

import './feedback.css'

const Feedback = ()=>{
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    }
    const slider = useRef()

    const handlePrev = ()=>{
        slider.current.slickPrev()
    }
    const handleNext = ()=>{
        slider.current.slickNext()
    }
    return(
        <div className='app__feedback wrapp'>
            <h1 className="headtext">ВІДГУКИ  ПРО ВИКОНАННЯ РОБОТИ</h1>
            <div data-aos="fade-up" className="app__feedback-btns">
                <button className="black__btn" onClick={handleNext}><img src={images.leftArrow} alt="" /></button>
                <button className="black__btn" onClick={handlePrev}><img src={images.rightArrow} alt=""/></button>
            </div>
            <Slider ref={slider} {...sliderSettings}>
                {feedbackData.map((obj, index)=>(
                    <div key={obj.id + index} data-aos="fade-up-right" className="feedback__block">
                        <img src={obj.image} alt="" />
                        <p className="p__text">{obj.text}</p>
                        <div>
                            <h6>{obj.name}</h6>
                            <p>{obj.date}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Feedback