import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <>
        <section className='HeaderContainer'>
            <div className='HeaderWrapper'>
                <Link to='/' style={{textDecoration:'none', color:'inherit'}}><div className='HeaderLogo'>Kora.Academy</div></Link>
                <div className='Buttons'>
                    <button className='HeaderBtn1'>Join our community</button>
                    <Link to='/registration' style={{textDecoration:'none', color:'inherit'}}><button className='HeaderBtn2'>Register for Free!</button></Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header