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
          <a href="mailto:info@colectivoaquiyahora.org">info@colectivoaquiyahora.org</a>
          <div className="item phone">
            <img src="./assets/tephone.png" alt="email"/>
            <p className="title">Teléfonos</p>
          </div>
          <a href="tel:+573134249593">
            +57 313 424 9593
          </a>
          <a href="tel:+5716183341">
            +57 (1) 618 3341
          </a>
          <a href="tel:+5716183341">
            +57 (1) 210 3193
          </a>
        </div>
        <div className="social">
          <div>
            <div className="item">
              <img src="./assets/whatsapp.png" alt="whatsapp"/>
              <p className="title">Whatsapp</p>
            </div>
            <a href="https://wa.me/573134249593" target="_blank" rel='noreferrer'>
              +57 313 424 9593
            </a>
            <br/>
            <a href="https://wa.me/573134249593" target="_blank" rel='noreferrer'>
              +57 313 424 9593
            </a>

          </div>
          <div className="redes">
            <a href="https://www.facebook.com/colectivoaquiyahora" target="_blank" rel='noreferrer'>
              <img src="./assets/et_facebook.png" alt="" />
            </a>
            <a href="https://twitter.com/ColectivoAyA" target="_blank" rel='noreferrer'>
              <img src="./assets/et_twitter.png" alt="" />
            </a>
            <a href="https://www.instagram.com/colectivoaya/" target="_blank" rel='noreferrer'>
              <img src="./assets/et_instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
