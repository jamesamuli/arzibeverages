import { useState } from 'react'
import Navbar from '../Components/navbar/Navbar'
import Landing from '../Components/leadingpage/landingPage'
import Brand from '../Components/brand/brand'
import Footer from '../Components/footer/Footer'

function Home() {

  return (
    <div className="h-screen select-none overflow-y-scroll overflow-x-hidden no-scrollbar">
        <Navbar/>
        <Brand/>
        <Landing/>
        <Footer/>
        {/* <h1>jfldsj</h1> */}
    </div>
  )
}

export default Home
