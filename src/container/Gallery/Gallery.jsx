import React from 'react';
import {BsInstagram} from 'react-icons/bs'
import {images} from '../../constants'

import './gallery.css'

const Gallery = ()=>{
    return(
        <div className='app__gallery wrapp' id='gallery'>
            <div className="app__gallery-container">
                <div className="gallery__img-big right-m">
                    <img data-aos="fade-up-right" src={images.s1} alt="" />
                    <a href="https://www.instagram.com/steli_starsky/" target='_blank' ><span><BsInstagram /></span></a>
                </div>
                <div className="gallery__img-small">
                    <div>
                        <img data-aos="fade-up" src={images.s6} alt="" />
                        <a href="https://www.instagram.com/steli_starsky/" target='_blank' ><span><BsInstagram /></span></a>
                    </div>
                    <div>
                        <img data-aos="fade-up" src={images.s7} alt="" />
                        <a href="https://www.instagram.com/steli_starsky/" target='_blank' ><span><BsInstagram /></span></a>
                    </div>
                </div>
            </div>
            <div className="app__gallery-container">
                <div className="gallery__img-small">
                    <div>
                        <img data-aos="fade-up" src={images.s8} alt="" />
                        <a href="https://www.instagram.com/steli_starsky/" target='_blank' ><span><BsInstagram /></span></a>
                    </div>
                    <div>
                        <img data-aos="fade-up" src={images.s9} alt="" />
                        <a href="https://www.instagram.com/steli_starsky/" target='_blank' ><span><BsInstagram /></span></a>
                    </div>
                </div>
                <div className="gallery__img-big left-m">
                    <img data-aos="fade-up-left" src={images.s10} alt="" />
                    <a href="https://www.instagram.com/steli_starsky/" target='_blank' ><span><BsInstagram /></span></a>
                </div>
            </div>
        </div>
    )
}

export default Gallery