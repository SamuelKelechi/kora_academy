import React from 'react'
import Hero from './Hero/Hero'
import Mission from './Mission/Mission'
import Package from './Package/Package'
import Sponsors from './Sponsors/Sponsors'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
        <Hero />
        <Package />
        <Mission />
        <Sponsors />
        <Footer />
    </>
  )
}

export default Home