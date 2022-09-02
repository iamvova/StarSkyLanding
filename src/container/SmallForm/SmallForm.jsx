import React, { useRef } from 'react';
import './smallform.css'
import emailjs from 'emailjs-com'

const SmallForm = ()=>{
    const ref = useRef()
    const sendSmallEmail = (e)=>{
        e.preventDefault()

        emailjs.sendForm('service_exyqojb', 'template_q0pp2gl', e.target, 'EXTjauOl9gUTLCSq7').then(res=>{
            console.log(res);
            if(res.status === 200){
                ref.current.value = ''
            }
        }).catch(err=>console.log(err))
    }
    
    return(
        <div className='app__smallForm'>
            <div className="overlay">
                <div className="app__smallForm-content flex__center">
                    <h2 data-aos="fade-up">Швидкий дзвінок від технолога</h2>
                    <form data-aos="fade-up" className='smallForm__form' onSubmit={sendSmallEmail}>
                        <input type="number" ref={ref} name="phone" placeholder='+38 098 805 8383' />
                        <button className="white__btn" >Надіслати</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SmallForm