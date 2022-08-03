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
                    To equip students with a strong foundation in IT related field to solve real-world problems and 
                    <br/>
                    <br/>
                    At Kora Academy we ensure that after the completion of 5 months intensive training and six months internship, the graduates are fully equipped with knowledge required for their future careers.
                </p>
                <Link to='/registration' className='LinkR' style={{textDecoration:'none', color:'inherit'}}><button className='MissionBtn'>Join cohort 1.0</button></Link>
            </div>

        </section>
    </>
  )
}

export default Mission