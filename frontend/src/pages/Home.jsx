import React from 'react';
import { useNavigate } from 'react-router-dom';

import Hero from '../components/homeComponents/Hero';
import Mission from '../components/homeComponents/MissionsUB';
import ProplemTypes from '../components/homeComponents/ProplemTypes';
import CTA from '../components/homeComponents/CTA';
import Stats from '../components/homeComponents/StatsUB';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';

import {getRole} from '../components/homeComponents/services/role.js'

const Home = () => {
  const navigate = useNavigate()

  const gotoPage = async () => {
   try {
     const respone= await getRole();
    const role=respone.data.role;
    if(role === "user") return navigate('/user/home')
      else alert("Please Login..")
   } catch (error) {
    console.log("Error:", error)
    alert("Unauthorized User!")
   }
    // navigate('/user/home')
  }
  return (
    <div>
      <Navbar />
      <Hero
        gotoPage={gotoPage}
      />
      <Mission />
      <ProplemTypes />
      <CTA />
      <Stats />
      <Footer />


    </div>
  )
}

export default Home;
