import React from 'react'
import './Hero.css'
import Img1 from '../../Images/img1.png'
import Img2 from '../../Images/Img2.png'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <>
        <section className='HeroContainer'>
            <div className='HeroTop'>
                Registration for the Kora Academy cohort 1.0 is now open!
            </div>
            <div className='Bottom'>
                <div className='BottomWrap'>
                    <div className='HeroLeft'>
                        <div className='HeroText'>
                            Become an Expert in Software Engineering for 
                            <div className='free'>FREE</div>
                        </div>
                        <p className='HeroPara'>
                            Join Kora Academy today, learn and acquire hands on experience,
                            build amazing portfolio and with guaranteed internship on completion,
                            all for free!
                        </p>
                        <Link to='/registration' className='HeroLinkr'><button className='HeroBtn'>Apply Now!</button></Link>
                    </div>

                        <img  className='HeroRight' src={Img1} alt='Avatar'/>
                        <img  className='HeroRight2' src={Img2} alt='Avatar'/>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero