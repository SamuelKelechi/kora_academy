import React from 'react'
import './Footer.css'
import Img7 from '../Images/img7.png'
import Fa from '../Images/fa.png'
import Tw from '../Images/tw.png'
import Li from '../Images/li.png'
import In from '../Images/in.png'
import Logo from '../Images/logos.png'

import {Link} from 'react-router-dom'
import Gmail from '../Images/gmail.png'

function Footer() {
    let date = new Date().getFullYear();

  return (
    <>
        <section className='FooterContainer'>

            <div className='FooterLogo'><img src={Logo} alt='Logo' className='Logs'/></div>

            <div className='FooterContent'>
                <div className='LeftContent'>
                    <h4>Get in touch</h4>
                    <p>+2348137253138</p>
                    <p>+2348186793482</p>
                    <div className='GmailHold'><img src={Gmail} alt='gmail' /> kora.academyng@gmail.com</div>
                    <img className='Img7' src={Img7} alt='avatar' />
                </div>

                <div className='MiddleContent'>
                    <h4>Social Media</h4>
                    <div className='SocialLinks'>
                        <a href='https://facebook.com/kora.AcademyNg' target='blank'><img src={Fa} alt='fa' className='Social'/></a>
                        <a href='https://twitter.com/KoraAcademyng' target='blank'><img src={Tw} alt='tw' className='Social'/></a>
                        <a href='https://www.linkedin.com/company/kora-academyng/' target='blank'><img src={Li} alt='li' className='Social'/></a>
                        <a href='https://www.instagram.com/kora.academyng' target='blank'><img src={In} alt='in' className='Social'/></a>
                    </div>
                    @kora.academyng
                </div>

                <div className='FooterBtnContain'>
                    <Link to='/registration' style={{textDecoration:'none', color:'inherit'}}><button className='FooterBtn'>Apply Now!</button></Link>
                </div>
            </div>

            <div className='FooterLine'></div>

            <div className='FooterBottom'> ©{date} Kora Academy | All rights reserved</div>


        </section>

    </>
  )
}

export default Footer