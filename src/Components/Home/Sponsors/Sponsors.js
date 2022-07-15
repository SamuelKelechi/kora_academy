import React from 'react'
import './Sponsors.css'
import Quidax from '../../Images/quidax.png'
import Korapay from '../../Images/korapay.png'
import Fincra from '../../Images/fincra.png'


function Sponsors() {
  return (
    <section className='SponsorsContainer'>
        
            <div className='SponsorsTop'>Meet Our Sponsors</div>

            <div className='SponsorsLogo'>
              
                    <img src={Quidax} alt='quidax' className='Logos1'/>
                    <img src={Korapay} alt='quidax' className='Logos'/>
                    <img src={Fincra} alt='quidax' className='Logos'/>

            </div>
      
    </section>
  )
}

export default Sponsors