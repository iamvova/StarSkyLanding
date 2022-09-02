import React from 'react';
import './whysteli.css'
const WhySteli = ()=>{
    return(
        <div className='app__why'>
            <div className="wrapp">
                <h1 className="headtext" style={{paddingTop: '100px'}}>ЧОМУ ВАРТО ОБРАТИ НАТЯЖНУ СТЕЛЮ</h1>
                <div className="app__why-container">
                    <div className="app__why-cards">
                        <div>
                            <div className="app__why-card" data-aos="fade-up">
                                <span>01</span>
                                <h3 style={{fontSize: '24px'}}>Естетика та довговічність</h3>
                                <p className="p__text">Термін служби натяжної стелі дуже високий, при дотриманні, всіх правил експлуатації та правильному догляді.</p>
                            </div>
                            <div className="app__why-card" data-aos="fade-up">
                                <span>02</span>
                                <h3>Різноманітність Стель</h3>
                                <p className="p__text">У вас є можливість знайти дуже великий асортимент самих різних натяжних стель на будь-який смак.</p>
                            </div>
                            <div className="app__why-card" data-aos="fade-up">
                                <span>03</span>
                                <h3>Простота та чистота</h3>
                                <p className="p__text">Технологія установки натяжної стелі займає мінімум часу і не вимагає застосування клею або попередньої підготовки.</p>
                            </div>
                        </div>

                        <div>
                            <div className="app__why-card" data-aos="fade-up">
                                <span>04</span>
                                <h3>Не вигоряють </h3>
                                <p className="p__text">Кольори і відтінки з роками не втрачають свій первинний вигляд і не вигоряють. </p>
                            </div>
                            <div className="app__why-card" data-aos="fade-up">
                                <span>05</span>
                                <h3>Демонтаж</h3>
                                <p className="p__text">Легко демонтується при необхідності</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySteli