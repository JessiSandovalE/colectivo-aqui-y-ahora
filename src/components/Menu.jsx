import React, { useContext } from 'react'
//style
import { menuStyle } from '../styles/menu'
import { button } from '../styles/var'
//Context
import { AppContext } from '../context/AppContext'

const Menu = () => {
 const{ menu } = useContext(AppContext)
  return (
    <div className={menuStyle}>
      <div className="logo">
        <img src='./assets/Logo.png' alt="logo"/>
      </div>
      <div className="navbar">
        <div className="options">
          {menu.map((item)=>
              <a key ="item.title" href={item.link} className="item">
                {item.title}
              </a>
          )}
        </div>
        <div className={`${button} btn`}>Solicitar información</div>
      </div>
    </div>
  )
}

export default Menu
