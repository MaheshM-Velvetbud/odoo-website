import React from 'react'
import Hero from './components/Hero/Hero'
import Feature from "./components/Feature/Feature"
import Section from "./components/Section/Index"
import Service from "./components/Service/Service"
import Footer from './components/Footer/Footer'

const page = () => {
  return (
    <div>
<Hero/>
<Section/>
<Feature/>
<Service/>
<Footer/>
    </div>
  )
}

export default page