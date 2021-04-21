import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Programs from '../components/Programs'
import About from '../components/About'
import Methodology from '../components/Methodology'
import Helps from '../components/Helps'
 
import {AppProvider} from '../context/AppContext'
const App = () => {
  return (
    <AppProvider>
      <Menu/>
      <Banner/>
      <About/>
      <Methodology/>
      <Programs/>
      <Helps/>
    </AppProvider>
  )
}

export default App
