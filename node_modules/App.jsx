import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from'./Components/programs/Programs'
import Title  from './Components/title/Title'
import About  from'./Components/about/About'
import Campus from'./Components/campus/campus'
import Testimonials from'./Components/testimonials/Testimonials'
import Contact from'./Components/contact/Contact'
import Footer from'./Components/ooter/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="OUR PROGRAM" title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle="GALLERY" title='Campus Photos'/>
      <Campus/>
      <Title subTitle="TESTIMONIALS" title='What Student Says'/>
      <Testimonials/>
      <Title subTitle="Contact" title='Get in Touch'/>
      <Contact/>
      <Footer/>
      
      </div>
      
    </div>
  )
}
export default App