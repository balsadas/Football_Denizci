import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Teams from '../components/Teams'
import Gallery from '../components/Gallery'
import { useState } from 'react'

function Home() {
  // const [fix, setFix] = useState(false)

  // const handleScroll = () => {
  //   if (window.scrollY >= 500) {
  //     setFix(!fix)
  //   }
  // }

  // window.addEventListener('scroll', handleScroll)

  return (
    <div >
      <Navbar />
      <AboutUs />
      <Teams />
      <Gallery />
      <ContactUs />

          <button className=' fixed bottom-8 right-4 '>
            <a href='#'>
              <img src='./img/up-arrow.png' className='md:w-[3vw] md:h-[3vw] ' />
            </a>
          </button>

    </div>
  )
}

export default Home
