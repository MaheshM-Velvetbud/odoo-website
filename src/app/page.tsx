import React from 'react'
import Hero from './components/Hero/Hero'
import Feature from "./components/Feature/Feature"
import Section from "./components/Section/Index"
import Service from "./components/Service/Service"
import Card from "./components/Card/Card"
import Aboutone from "./components/About/About"
import Footer from './components/Footer/Footer'
import AboutTwo from './components/About/Abouttwo'
import ServiceTwo from "../app/components/ServiceTwo/ServiceTwo"
import Header from './components/Header'

const page = () => {
  return (
    <div>
      <Header/>
<Hero/>
<Section/>
<Feature/>
<Service/>
<ServiceTwo/>
<Aboutone/>
<div className='py-12'><Card/></div>

<AboutTwo/>
<Footer/>
    </div>
  )
}

export default page