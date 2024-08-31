import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'

const App = () => {
  const[playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container'>
      <Title subTitle="Our PROGRAM" title="What We Offer"></Title>
      <Programs></Programs>
      <About setPlayState={setPlayState}></About>
      <Title subTitle="Gallery" title="Campus Photos"></Title>
      <Campus></Campus>
      <Title subTitle="Testimonials" title="What Student Says "></Title>
      <Testimonials></Testimonials>
      <Title subTitle="Contact Us" title="Get in Touch"></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App
