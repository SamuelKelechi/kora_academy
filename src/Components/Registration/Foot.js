import React from 'react'
import './Foot.css'
import Img7 from '../Images/img7.png'
import Fa from '../Images/fa.png'
import Tw from '../Images/tw.png'
import Li from '../Images/li.png'
import In from '../Images/in.png'

import {Link} from 'react-router-dom'
import Gmail from '../Images/gmail.png'

function Foot() {
    let date = new Date().getFullYear();

  return (
    <>
        <section className='FooterContainer'>

            <div className='FooterLogo'>Kora.Academy</div>

            <div className='FooterContent'>
                <div className='LeftContent'>
                    <h4>Get in touch</h4>
                    <p>+2348186793482</p>
                    <p>+2348137253138</p>
                    <div className='GmailHold'><img src={Gmail} alt='gmail' /> kora.academy@gmail.com</div>
                    <img className='Img7' src={Img7} alt='avatar' />
                </div>

                <div className='MiddleContent'>
                    <h4>Social Media</h4>
                    <div className='SocialLinks'>
                        <a href='' target='blank'><img src={Fa} alt='fa' className='Social'/></a>
                        <a href='' target='blank'><img src={Tw} alt='tw' className='Social'/></a>
                        <a href='' target='blank'><img src={Li} alt='li' className='Social'/></a>
                        <a href='' target='blank'><img src={In} alt='in' className='Social'/></a>
                    </div>
                    @kora.academy
                </div>

                {/* <div className='FooterBtnContain'>
                    <Link to='/registration' style={{textDecoration:'none', color:'inherit'}}><button className='FooterBtn'>Apply Now!</button></Link>
                </div> */}
            </div>

            <div className='FooterLine'></div>

            <div className='FooterBottom'> ©{date} Kora Academy | All rights reserved</div>


        </section>

    </>
  )
}

export default Foot