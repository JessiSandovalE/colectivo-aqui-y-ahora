import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Modal from './Modal'
import { AppContext } from '../context/AppContext'
import { menuStyle } from '../styles/menu'
import { button } from '../styles/var'


const Menu = () => {
 const{ menu, setViewModal } = useContext(AppContext)
  return (
    <div className={menuStyle}>
      <div className="logo">
        <Link smooth to="/#home">
          <img src='./assets/Logo.png' alt="logo"/>
        </Link>
      </div>
      <div className="navbar">
        <div className="options">
          {menu.map((item)=>
              <Link  smooth to={item.link} key ={item.title} className="item">
                {item.title}
              </Link>
          )}
        </div>
        <div className={`${button} btn`} onClick={()=> setViewModal(true)}>Solicitar información</div>
      </div>
      <Modal/>
    </div>
  )
}

export default Menu
