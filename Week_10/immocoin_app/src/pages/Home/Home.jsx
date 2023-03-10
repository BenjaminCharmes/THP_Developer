export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='home-title'>
      </div>
      <Footer />  
    </div>
  )
}

import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import './Home.scss'


