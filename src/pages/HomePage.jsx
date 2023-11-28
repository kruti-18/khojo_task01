import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'


function HomePage() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Services/>
      <Reviews/>
      <Footer/>
      {/* <CategorySection/> */}
      {/* <Slider data={slidesData}/> */}
    </div>
  )
}

export default HomePage