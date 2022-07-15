import React from 'react'
import './Mission.css'
import Img6 from '../../Images/img6.png'
import Bulb from '../../Images/bulb.png'
import {Link} from 'react-router-dom'

function Mission() {
  return (
    <>
        <section className='MissionCont'>

            <img className='Img6' src={Img6} alt='Avatar' />

            <div className='MissionRight'>
                <div className='MissionTop'>
                    <div className='MissionTitle'>
                        Our <br/> Mission <br/> & Vision
                    </div>

                    <img src={Bulb} alt='Bulb' className='Bulb'/>
                </div>
                <p className='MissionPara'>
                We ensure to provide you with the best instructor to make your learning fun and impactful, we have hand selected out instructors that will deliver the best learning experience <br/>
                'We believe in practical, and that is why we invest on it, you would learn better by doing it yourself, get ready! <br/>
                A paid internship placement awaits you on your successful completion of the intensive five months training.
                You will be assigned to a mentor who will guide you through your journey in Tech
                </p>
                <Link to='/registration' className='LinkR' style={{textDecoration:'none', color:'inherit'}}><button className='MissionBtn'>Join cohort 1.0</button></Link>
            </div>

        </section>
    </>
  )
}

export default Mission