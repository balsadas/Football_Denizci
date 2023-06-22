import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Teams from '../components/Teams'
import Gallery from '../components/Gallery'
import { useState } from 'react'
import Our_Priorities from '../components/Our_Priorities'
import Footer from '../components/Footer'

function Home() {


  return (
    <div >
      <Navbar />
      <AboutUs />
      <Teams />
      <Our_Priorities />
      <Gallery />
      <ContactUs />


      <div className=' fixed bottom-8 right-4 z-[98]'>
        <a href='#'>
          <img src='./img/up-arrow.png' className='md:w-[3vw] md:h-[3vw] w-[8vw] h-[8vw] ' />
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Home
