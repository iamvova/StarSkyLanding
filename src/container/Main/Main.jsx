import React, {useEffect, useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'

import './main.css'

const Main = ()=>{
    const [toggleMenu, setToggleMenu] = useState(false)
    const [hideBreger, setHideBreger] = useState(true)
    const [onScroll, setOnScroll] = useState(false)
    useEffect(()=>{
        if(toggleMenu === true){
            document.querySelector('body').style.overflowY = 'hidden';
        }else {
            document.querySelector('body').style.overflowY = 'auto';
        }
    })

    const handleOpenMenu = ()=>{
        setToggleMenu(current => !current)
        setHideBreger(current => !current)
    }

    const onScrollChange = ()=>{
        if(window.scrollY >= 670){
            setOnScroll(true)
        }else{
            setOnScroll(false)
        }
    }
    window.addEventListener('scroll', onScrollChange)
    return(
        <div className='app__main' id='main'>
            <div className='overlay'>
                <nav className={onScroll ? 'app__main-flex_center nav__scroll-white' : 'app__main-flex_center nav__top-black'}>
                    <div className='app__main-logo'>StarSky</div>
                    <ul className={onScroll ? 'app__main-list app__list-white' : 'app__main-list app__list-black'}>
                        <li ><a href='#main'>Головна</a></li>
                        <li ><a href='#about'>Про нас</a></li>
                        <li ><a href='#price'>Ціни</a></li>
                        <li ><a href='#gallery'>Галерея</a></li>
                        <li ><a href='#contacts'>Контакти</a></li>
                    </ul>
                    <div className="app__navbar-smallscreen">
                        <GiHamburgerMenu className='burger__icon' color={onScroll ? '#333' : '#fff'} fontSize={37} style={{display: hideBreger ? 'block' : 'none'}} onClick={handleOpenMenu} />
                        {toggleMenu && (
                            <div className="app__navbar-smallscreen-overlay flex__center slide__bottom">
                                <CgClose className="overlay__close" color='#fff' fontSize={37} onClick={handleOpenMenu} />           
                                <ul className="app__navbar-smallscreen-links">
                                    <li onClick={handleOpenMenu}><a href='#main'>Головна</a></li>
                                    <li onClick={handleOpenMenu}><a href='#about'>Про нас</a></li>
                                    <li onClick={handleOpenMenu}><a href='#price'>Ціни</a></li>
                                    <li onClick={handleOpenMenu}><a href='#gallery'>Галерея</a></li>
                                    <li onClick={handleOpenMenu}><a href='#contacts'>Контакти</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="app__main-title flex__center" style={{display: hideBreger ? 'block' : 'none'}}>
                    <h1 className='app__main-animate-top'> Натяжні Стелі </h1>
                    <h1 className='app__main-animate-top1'>StarSky у Львові</h1>
                </div>

                <div className="app__mouse-bottom" style={{display: hideBreger ? 'block' : 'none'}}></div>
            </div>
        </div>
    )
}

export default Main