import React, { useState } from "react";

import {price} from '../../constants'


const Calculator = () => {
    const [value, setValue] = useState('')
    const [valRange, setValRange] = useState('')

    const handleFormPrice = (e)=>{
        const val = e.target.value
        setValRange(e.target.value)
    
        if(val <= 9) setValue(price.MINIMAL)
        else if(val > 9 && val <= 30) setValue(val * price.FROM_10_TO_30)
        else if(val > 30 && val <= 50) setValue(val * price.FROM_30_TO_50)
        else if(val > 50 && val <= 100) setValue(val * price.FROM_50_TO_100)
        else if(val > 100) setValue('Договірна')        
    }


    return( 
        <>
            <h1 className="headtext headtext__small">РОЗРАХУВАТИ ПРИБЛИЗНУ <br /> ВАРТІСТЬ НАТЯЖНОЇ СТЕЛІ</h1>
            <div className="app__price-count">
                <p data-aos="fade-up">Введіть кількість метрів квадратних</p>
                <div className="chrome">
                    <input data-aos="fade-up" type="range" min="0" max="150" onInput={handleFormPrice}/>
                </div>
                <div data-aos="fade-up" className="price__count-container">
                    <input type="number" placeholder='55 м.Кв' value={valRange} onChange={handleFormPrice} />
                </div>
                <div className="price_count-text">
                    <h3 data-aos="fade-up">У вас - {valRange} м.Кв</h3>
                    <h3 data-aos="fade-up">Вартість стелі - {value + ' грн'} {value === 'Договірна' ? '' : "( " + value / price.CURRENT_COURSE_USD + '$ )'}</h3>
                    <p data-aos="fade-up" className="p__text">Це не кінцева ціна. Вона може змінюватися <br /> та корегуватися під час заміру. </p>
                    <a href="#contacts"><button data-aos="fade-up" className="black__btn">Звязатися з технологом</button></a>
                </div>
            </div>
        </>
    )
}

export default Calculator