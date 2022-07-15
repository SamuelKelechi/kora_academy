import React from 'react';
// import Logo from '../Images/kora.png';
import './Success.css';
import Sucess from '../Images/success.png';

const Success = () => {

    return (
        <div className='ConTain'>
            
            <div className='SuccessWrapper'>
                <div className='Page1LogoHold'>
                    {/* <img src={Logo} alt='Logo'className='Logo'/>  */}
                    Kora Academy
                </div>
                     <img src={Sucess} alt='Successful' className='ImageSuccess'/>
                     <div className='Thanks'>Thank You!</div>
                     <div className='Application'>Your application has been sent</div>
            </div>
      </div>
    )
}

export default Success;