import React from 'react'
import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import JobGrid from './sections/JobGrid'
import Talent from './sections/Talent'
import WhyChooseUs from './sections/WhyChooseUs'


const App = () => {
  return (
    <div>
           <Header/>
          <HeroSection/>
          <JobGrid/>
          <Talent/>
          <WhyChooseUs/>
    </div>
  )
}

export default App