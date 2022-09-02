import React from 'react';
import {images} from '../../constants'
import './propose.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Propose = ()=>{
    return(
        <div className='app__propose wrapp' id='about'>
            <h1 className="headtext">наші послуги</h1>
            <div className="app__propose-cards app__wrapper">
                <div className="app__propose-card">
                    <div data-aos="fade-up" className="card__img">
                        <img src={images.s3} alt="" />
                    </div>
                    <h3 data-aos="fade-up">Багаторівневі стелі</h3>
                    <hr />
                    <p data-aos="fade-up" className='p__text'>За допомогою багатоярусного натяжної стелі можна вирішити багато складних завдань в облаштуванні приміщення. Конструкція здатна якісно приховати багато інженерні системи, балки, нерівності і перепади, практично не знижуючи рівень стелі.</p>
                    <a href="#gallery"><button data-aos="fade-up" className="black__btn">Більше Фото</button></a>
                </div>
                <div className="app__propose-card">
                    <div data-aos="fade-up" className="card__img">
                        <img src={images.s2} alt="" />
                    </div>
                    <h3 data-aos="fade-up">Однорівневі стелі</h3>
                    <hr />
                    <p data-aos="fade-up" className='p__text'>  З її допомогою можна перетворити дизайн в інтер'єрі, створити комфортну атмосферу в кімнаті.Завдяки широкому асортименту кольорів та фактур натяжних полотен, ви підберете найбільш оптимальне рішення для дизайну вашого приміщення.</p>
                    <a href="#gallery"><button data-aos="fade-up" className="black__btn">Більше Фото</button></a>
                </div>
                <div className="app__propose-card">
                    <div data-aos="fade-up" className="card__img">
                        <img src={images.s4} alt="" />
                    </div>
                    <h3 data-aos="fade-up">Фотодрук стелі</h3>
                    <hr />
                    <p data-aos="fade-up" className='p__text'>Натяжні стелі з фотодруком – це можливість прикрасити стельовий простір за допомогою абсолютно будь-якого зображення. За допомогою нешкідливого для здоров’я, але дуже довговічного чорнила, на ПВХ-плівку наноситься вибраний малюнок з високим розділеннямй</p>
                    <a href="#gallery"><button data-aos="fade-up" className="black__btn">Більше Фото</button></a>
                </div>
            </div>
        </div>
    )
}

export default Propose