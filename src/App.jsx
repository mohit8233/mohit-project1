import React from 'react'
import Header from './components/Header'
import HeroSection from './sections/HeroSection'

import JobGrid from './sections/JobGrid'
import JobCategories from './sections/JobCategories'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      {/* <JobCategories/> */}
      <JobGrid/>
    </div>
  )
}

export default App