import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Contact from "@/app/components/Card/Card"

const page = () => {
  return (
    <div className='pt-32'>
<Header/>
<Contact/>
<Footer/>
  </div>
  )
}

export default page