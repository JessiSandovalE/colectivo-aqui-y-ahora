import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { AboutStyle } from '../styles/about'

const About = () => {
  const {
    about
  } = useContext(AppContext)
  return (
    <div className={AboutStyle}>
      <div className="aboutImage">
        <img src="./assets/Somos.png" alt="Somos" width="100%"/>
      </div>
      <div className="aboutInfo">
          <p className= "aboutText">
          Somos una organización de base científica, con 24 años de trayectoria ayudando a miles de familias en la recuperación de sus seres queridos con un profundo respeto por el ser humano.
          </p>
      </div>
      <div className="aboutSection">
        <div className="aboutSectionImage">
          <img src="./assets/about.png" alt="aboutImage" width="100%" />
        </div>
        <div className="aboutSectionInfo">
          {about.map(item=>
            <div className="item" key={item.title}>
              <div className="icon">
                <img src={item.icon} alt={item.title}/>
              </div>
              <p className="aboutSectionText">
                <span className="aboutTitle"> {item.title}</span> <br/>{item.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
