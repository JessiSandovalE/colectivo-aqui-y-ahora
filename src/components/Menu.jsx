import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Modal from './Modal'
import { AppContext } from '../context/AppContext'
import { menuStyle } from '../styles/menu'
import { button } from '../styles/var'
import { useLocation } from 'react-router'

const Menu = () => {
 const{
   menu, setViewModal,
   setOpen,open,
   setIcon,icon
  } = useContext(AppContext)
  const location = useLocation()
  const changeMenu = () => {
  window.scrollTo(0, 0,)
  setOpen(!open)
  setIcon (!icon)
}
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
              <Link smooth to={item.link} key ={item.title} className={`item ${location.hash === item.link ? ' active': ''} `} >
                {item.title}
              </Link>
          )}
        </div>
        <div className={`${button} btn`} onClick={()=> setViewModal(true)}>Solicitar información</div>
      </div>
      <div className={`responsive-nav` + (open ? ' active': '')}>
        <div className={(open? ' activeMenu': ' inactive')}>
          <div className="options">
            {menu.map((item)=>
                <Link smooth to={item.link} key ={item.title} className="item" onClick={()=>changeMenu()} >
                  {item.title}
                </Link>
            )}
          </div>
        </div>
      </div>
      <div className='contIcon'>
          <div className={`hamburgerIcon ` + (icon ? ' active' :'') } onClick={() => changeMenu()} >
            <div className="lines line-top icon"></div>
            <div className="lines line-mid icon"></div>
            <div className="lines line-buttom icon"></div>
          </div>
      </div>
      <Modal/>
    </div>
  )
}

export default Menu
