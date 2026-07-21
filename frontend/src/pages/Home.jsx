import React from 'react'
import Hero from '../components/homeComponents/Hero'
import Mission from '../components/homeComponents/MissionsUB'
import ProplemTypes from '../components/homeComponents/ProplemTypes'
import CTA from '../components/homeComponents/CTA'
import Stats from '../components/homeComponents/StatsUB'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'


const Home = () => {

  const gotoPage= async()=>{
    console.log("Under Working...");
  }
  return (
    <div>
        <Navbar/>
        <Hero gotoPage={gotoPage} />
        <Mission/>
        <ProplemTypes/>
        <CTA/>
        <Stats/>
        <Footer/>


    </div>
  )
}

export default Home;
