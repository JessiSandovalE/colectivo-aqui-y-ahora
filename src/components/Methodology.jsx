import React, { useContext } from 'react'
import { MethodologyStyle } from '../styles/methodology'
import { container } from '../styles/var'
import { AppContext } from '../context/AppContext'
import parse from 'html-react-parser'

const Methodology = () => {
  const {methodology} = useContext(AppContext)
  return (
    <div className={MethodologyStyle}>
      <div className="itemMethodology">
        <div className={`${container} methodologyInfo`}>
          <h2>¿Cómo lo hacemos?</h2>
          <p>Brindamos herramientas a las personas para recuperarse de las situaciones que los aquejan, enfocándonos en la raíz del problema y abordando temas tan importantes como la motivación para el cambio, estructura de la personalidad, prevención de recaídas y el sentido de vida. </p>
        </div>
        <div className="image">
          <img src="./assets/efren.png" alt="Efren" />
        </div>
      </div>
      <div className="itemInfo">
        {methodology.map(item =>
        <div className="item">
          <h4>{item.title}</h4>
          <p>{parse(item.description)}</p>
        </div>
        )}
      </div>
    </div>
  )
}

export default Methodology
