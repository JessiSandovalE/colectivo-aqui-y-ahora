import React from 'react'
import { FooterStyle } from '../styles/footer'
import { container } from '../styles/var'

const Footer = () => {
  return (
    <div className={`${FooterStyle} ${container}`}>
      <div className="top">
        <h3>Para mayor información contáctanos en:</h3>
      </div>
      <div className="bottom">
        <div className="address">
          <p className="title">Oficina Principal</p>
          <h3>Colectivo Aquí y Ahora</h3>
          <p>
            Carrera 14A No. 101 - 11 <br/>
            Oficina 302. Edificio Lumina <br/>
            Bogotá - Colombia
          </p>
        </div>
        <div className="contact">
          <div className="item">
            <img src="./assets/email.png" alt="email"/>
            <p className="title">Correo electrónico</p>
          </div>
          <p>info@colectivoaquiyahora.org</p>
          <div className="item phone">
            <img src="./assets/tephone.png" alt="email"/>
            <p className="title">Teléfonos</p>
          </div>
          <p>
            +57 313 424 9593 <br/>
            +57 (1) 618 3341 <br/>
            +57 (1) 210 3193
          </p>
        </div>
        <div className="social">
          <div>
            <div className="item">
              <img src="./assets/whatsapp.png" alt="whatsapp"/>
              <p className="title">Whatsapp</p>
            </div>
            <p>
              +57 313 424 9593 <br/>
              +57 313 424 9593
            </p>
          </div>
          <div className="redes">
            <img src="./assets/et_facebook.png" alt="" srcset=""/>
            <img src="./assets/et_twitter.png" alt="" srcset=""/>
            <img src="./assets/et_instagram.png" alt="" srcset=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
