import React, { useRef } from 'react';
import {BsInstagram} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import {SiViber} from 'react-icons/si'

import './contacts.css'

import emailjs from 'emailjs-com'

const Contacts = ()=>{
    const name = useRef()
    const phone = useRef()
    const address = useRef()

    const sendEmail = (e)=>{
        e.preventDefault()

        emailjs.sendForm('service_exyqojb', 'template_1ncy84l', e.target, 'EXTjauOl9gUTLCSq7').then(res=>{
            console.log(res);
            if(res.status === 200){
                name.current.value = ''
                phone.current.value = ''
                address.current.value = ''
            }
        }).catch(err=>console.log(err))
    }
    return(
        <div className='app__contacts ' id='contacts'>
            <h1 className="headtext">контакти</h1>
            <div className="app__contacts-container wrapp">
                <form className='contacts__form' onSubmit={sendEmail}>
                    <input data-aos="fade-up" ref={name} name='name' type="text" placeholder='Оксана' required/>
                    <input data-aos="fade-up" ref={phone} name='phone' type="text" placeholder='+38 098 805 8383' required/>
                    <input data-aos="fade-up" ref={address} name='address' type="text" placeholder='Місто та адреса' />
                    <button data-aos="fade-up" className="black__btn">Надіслати</button>
                </form>
                <div className="app__contacts-text">
                    <h6  data-aos="fade-up">Зв'яжіться нами</h6>
                    <p  data-aos="fade-up" className="p__text">+38 098 805 8383</p>
                    <p  data-aos="fade-up" className="p__text">+38 093 805 8383</p>
                    <div  data-aos="fade-up" className="app__contacts-text_social">
                        <ul>
                            <li><a href="https://www.instagram.com/steli_starsky/" target='_blank'><BsInstagram/></a></li>
                            <li><a href="#https://www.facebook.com/people/%D0%9D%D0%B0%D1%82%D1%8F%D0%B6%D0%BD%D1%96-%D1%81%D1%82%D0%B5%D0%BB%D1%96-StarSky/100029157648494/" target='_blank'><FiFacebook/></a></li>
                            <li><a href="#!" target='_blank'><SiViber/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <p>{new Date().getFullYear()} All Rights reserved</p>
            </footer>
        </div>
    )
}

export default Contacts