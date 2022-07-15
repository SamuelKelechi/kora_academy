import React from 'react'
import './Card.css'


function Card({bg, para, bd, title, icon}) {
  return (
    <>
      <div className='PackCardHold'>

        <div className='CardLogo' style={{backgroundColor:`${bg}`}}>
          <img src={icon} alt='icon'/>
        </div>

        <div className='PackCardTitle'>{title}</div>

        <div className='PackLine' style={{border:`${bd}`}}></div>

        <p className='PackPara'>
          {para}
        </p>

      </div>    
    </>
  )
}

export default Card