import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Service from "@/app/components/Service/Service"
import Servicetwo from "@/app/components/ServiceTwo/ServiceTwo"

const page = () => {
  return (
    <div className='pt-32'>
<Header/>
<Service/>
<Servicetwo/>
<Footer/>
  </div>
  )
}

export default page