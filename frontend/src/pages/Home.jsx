import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/homeComponents/Hero'
import Mission from '../components/homeComponents/MissionsUB'
import ProplemTypes from '../components/homeComponents/ProplemTypes'
import CTA from '../components/homeComponents/CTA'
import Stats from '../components/homeComponents/StatsUB'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'


const Home = () => {
  const navigate = useNavigate()

  const gotoPage = async () => {
    navigate('/user/home')
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
