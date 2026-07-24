import React,{useState} from 'react'
import Hero from '../components/homeComponents/Hero'
import Mission from '../components/homeComponents/MissionsUB'
import ProplemTypes from '../components/homeComponents/ProplemTypes'
import CTA from '../components/homeComponents/CTA'
import Stats from '../components/homeComponents/StatsUB'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import {useNavigate} from 'react-router-dom'


const Home = () => {
  const [role,setRole]=useState('')
  const nav=useNavigate();
  const gotoPage= async()=>{
    console.log("Under Working...");
    console.log("Role:", role)
    if(role === "user") return nav('/user/home')
  }
  return (
    <div>
        <Navbar/>
        <Hero 
        gotoPage={gotoPage}
        setRole={setRole} />
        <Mission/>
        <ProplemTypes/>
        <CTA/>
        <Stats/>
        <Footer/>


    </div>
  )
}

export default Home;
