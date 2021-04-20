import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Programs from '../components/Programs'
import About from '../components/About'
import Methodology from '../components/Methodology'

import {AppProvider} from '../context/AppContext'
const App = () => {
  return (
    <AppProvider>
      <Menu/>
      <Banner/>
      <About/>
      <Methodology/>
      <Programs/>
    </AppProvider>
  )
}

export default App
