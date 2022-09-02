import React from 'react';
import {images, price} from '../../constants'
import Calculator from './calculator';

import './price.css'


const Price = ()=>{
    return(
        <div className='app__price wrapp' id='price'>
            <h1 className="headtext">ВАРТІСТЬ НАТЯЖНОЇ СТЕЛІ</h1>
            <div className="app__price-price app__wrapper">
                <div className="price__text">
                    <p data-aos="fade-up" className="p__text">Площа до 9 м.Кв - {price.MINIMAL}грн (мінімальне замовлення)</p>
                    <p data-aos="fade-up" className="p__text">Площа від 10 м.Кв до 30 м.Кв - {price.FROM_10_TO_30}грн</p>
                    <p data-aos="fade-up" className="p__text">Площа від 30 м.Кв до 50 м.Кв - {price.FROM_30_TO_50}грн</p>
                    <p data-aos="fade-up" className="p__text">Площа від 50 м.Кв - {price.FROM_50_TO_100}грн</p>
                </div>
                <div className="price__img">
                    <img data-aos="fade-up-left" data-aos-duration="500" src={images.s11} alt="" />
                </div>
            </div>
            <Calculator />
        </div>
    )
}

export default Price