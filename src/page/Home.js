import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Teams from '../components/Teams'
import Gallery from '../components/Gallery'
import { useState } from 'react'

function Home() {


  return (
    <div >
      <Navbar />
      <AboutUs />
      <Teams />
      <Gallery />
      <ContactUs />

          <div className=' fixed bottom-8 right-4 z-[999]'>
            <a href='#'>
              <img src='./img/up-arrow.png' className='md:w-[3vw] md:h-[3vw] w-[8vw] h-[8vw] ' />
            </a>
          </div>

    </div>
  )
}

export default Home
