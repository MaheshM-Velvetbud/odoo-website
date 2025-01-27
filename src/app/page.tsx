import React from 'react'
import Hero from './components/Hero/Hero'
import Feature from "./components/Feature/Feature"
import Section from "./components/Section/Index"
import Service from "./components/Service/Service"

const page = () => {
  return (
    <div>
<Hero/>
<Section/>
<Feature/>
<Service/>
    </div>
  )
}

export default page