import React from 'react'
import Cards from './Cards'
import CitiesCarousel from './CitiesCarousel'
import HeroSection from './HeroSection'
import TravelTips from './TravelTips'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Cards/>
      <CitiesCarousel/>
      <TravelTips/>
    </div>
  )
}

export default Home