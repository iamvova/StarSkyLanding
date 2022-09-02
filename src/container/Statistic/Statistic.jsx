import React, { useRef } from 'react';
import CountUp from 'react-countup';
import './statistic.css'

import useOnScreen from "../../components/useOnScreen";


const Statistic = ()=>{
    const ref = useRef(null)

    const isVisible = useOnScreen(ref)
    
    // console.log("is", isVisible);
        
    return(
        <div className='app__stat'>
            <div className="overlay">
                <div className="app__stat-cards app__wrapper wrapp" ref={ref}>
                    <div className="app__stat-card">
                        <span data-aos="fade-up">{isVisible === true ? <CountUp start="0" end="2500" /> : null}</span>
                        <p data-aos="fade-up">закритих проектів</p>
                    </div>
                    <div className="app__stat-card">
                        <span data-aos="fade-up">{isVisible === true ? <CountUp start="0" end="9" /> : null}</span>
                        <p data-aos="fade-up">років на ринку</p>
                    </div>
                    <div className="app__stat-card">
                        <span data-aos="fade-up">{isVisible === true ? <CountUp start="0" end="450" /> : null}</span>
                        <p data-aos="fade-up">креативних рішень</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic