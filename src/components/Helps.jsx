import React, { useContext } from 'react'
import { HelpsStyle } from '../styles/helps'
import { container } from '../styles/var'
import { AppContext } from '../context/AppContext'

const Helps = () => {
  const { helpOption } = useContext(AppContext)

  return (
    <div id="help-us" className={HelpsStyle}>
      <div className={`${container} helpsInfo`}>
        <div className="item1">
          <h2>¿Quieres ayudar a un ser amado y no sabes por dónde empezar? </h2>
          <p>Si no logras que tu ser querido haga parte de un tratamiento que tú sabes que necesita, empieza por acá. Agenda un espacio de 1 hora con nuestros especialistas donde te enseñamos herramientas prácticas para:
          </p>
        </div>
        <div className="item2">
          {helpOption.map(item =>
            <div className="option" key={item.number}>
              <h2>{item.number}</h2>
              <p className="infoOption"> {item.text}</p>
            </div>
          )}
        </div>
      </div>
      <img
        className="image"
        src="./assets/help.png"
        alt="Cambiar si es posible"
        width="100%"
      />
    </div>
  )
}

  export default Helps
