import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../context/AppContext'
//API
import { createContact } from '../api/contact'
//Style
import { ModalStyle } from '../styles/modal'
import { button } from '../styles/var'

const Modal = () => {
  const {
    ViewModal, setViewModal,
    name, setName,
    number, setNumber,
    email, setEmail,
    comment, setComment,
    autorization, setAutorization,
    dataSend, setDataSend
  } = useContext(AppContext)

  const sendContact = () => {
    const data = {name, number, email, comment, autorization}
    if(data) {
      createContact(data)
        .then (()=> {
          setName('')
          setNumber('')
          setEmail('')
          setComment('')
          setAutorization('')
          setDataSend(true)
      })
      .catch(()=> {
        console.log({
          message: 'Uy algo salio mal',
          position: 'bottom-right', error: true
        })
    })
    }
  }

  const close = () => {
    setViewModal(null)
    setDataSend(false)
    setName('')
    setNumber('')
    setEmail('')
    setComment('')
    setAutorization('')
  }

  return ViewModal? (
    ReactDOM.createPortal(
      <div className={ModalStyle}>
        <div className="modal-container">
          <div className="close" onClick={()=> close()}>
            X
          </div>
          {!dataSend && (
            <>
              <h3 className="title">
                Contacto
              </h3>
              <form>
                <div className="inputFile">
                  <div className="inputRoot">
                    <input
                      type="text"
                      placeholder="Tu nombre y tus apellidos"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    <fieldset aria-hidden="true">
                      <legend>Nombre Completo</legend>
                    </fieldset>
                  </div>
                </div>
                <div className="inputFile">
                  <div className="inputRoot">
                    <input
                      type="text"
                      placeholder="Número"
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                    />
                    <fieldset aria-hidden="true">
                      <legend>Número de celular</legend>
                    </fieldset>
                  </div>
                </div>
                <div className="inputFile">
                  <div className="inputRoot">
                    <input
                      type="text"
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <fieldset aria-hidden="true">
                      <legend>Correo electrónico</legend>
                    </fieldset>
                  </div>
                </div>
                <div className="inputFile">
                  <div className="inputRoot">
                    <textarea
                      placeholder="¿Cuál es el motivo de tu consulta?"
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                    />
                    <fieldset aria-hidden="true">
                      <legend>Comentario (Opcional)</legend>
                    </fieldset>
                  </div>
                </div>
                <div className="terms">
                  <p>
                    Autorizo el manejo de mis datos personales de acuerdo a las políticas de tratamiento de datos del Colectivo Aqui y Ahora
                  </p>
                  <div className="options">
                    <label>Si</label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                        id="si"
                        checked={autorization === 'si'}
                        onChange = { e => setAutorization('si')}
                      />
                      <span className="checkmark"></span>
                    </label>

                    <label >No</label>
                    <label className="custom-radio-btn">
                      <input
                        type="radio"
                        id="no"
                        checked={autorization === 'no'}
                        onChange = { e => setAutorization('no')}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="send">
                  <div
                    className={`${button} btn-contact`}
                    onClick={()=> sendContact()}
                  >
                    Enviar datos
                  </div>
                </div>
              </form>
            </>
           )}
          {dataSend && (
            <>
              <h2 className="sendTitle">
                Tu información ha sido
                enviada con exito
              </h2>
              <p className="textSendInfo">
                 Nuestro equipo se contactará contigo en menos de 48 horas.
              </p>
            </>
          )}
        </div>
      </div>,
     document.getElementById('modal')
    )
  ): <div/>
}

export default Modal
