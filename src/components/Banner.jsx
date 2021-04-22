import React from 'react'

import { BannerStyle } from '../styles/banner'
import { container } from '../styles/var'

const Banner = () => {
  return (
    <div id="home" className={BannerStyle}>
      <div className= {container}>
        <h1>
          Tratamiento<br/>
          Colectivo<br/>
          Aquí y Ahora
        </h1>
        <p>
          El lugar donde la vida recupera su sentido
        </p>
      </div>
    </div>
  )
}

export default Banner
