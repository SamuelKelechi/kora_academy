import React from 'react'
import './Sponsors.css'
// import Quidax from '../../Images/quidax.png'
// import Korapay from '../../Images/korapay.png'
import Korapay from '../../Images/logo-kora.svg'
// import Fincra from '../../Images/fincra.png'


function Sponsors() {
  return (
    <section className='SponsorsContainer'>
        
            <div className='SponsorsTop'>Meet Our Sponsor</div>

            <div className='SponsorsLogo'>
              
                    {/* <img src={Quidax} alt='quidax' className='Logos1'/> */}
                    <a href='https://korapay.com/' target='blank'><img src={Korapay} alt='quidax' className='Logos'/></a>
                    {/* <img src={Fincra} alt='quidax' className='Logos'/> */}

            </div>
      
    </section>
  )
}

export default Sponsors