import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import About from "@/app/components/About/About"

import AboutTwo from '../components/About/Abouttwo'

const page = () => {
  return (
    <div className='pt-32'>
<Header/>
<About/>
<AboutTwo/>
<Footer/>
  </div>
  )
}

export default page