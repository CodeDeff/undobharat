import React from 'react'
import Hero from '../components/homeComponents/Hero'
import Mission from '../components/homeComponents/MissionsUB'
import ProplemTypes from '../components/homeComponents/ProplemTypes'
import CTA from '../components/homeComponents/CTA'
import Stats from '../components/homeComponents/StatsUB'
import Footer from '../components/common/Footer'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Mission/>
        <ProplemTypes/>
        <CTA/>
        <Stats/>


    </div>
  )
}

export default Home;
