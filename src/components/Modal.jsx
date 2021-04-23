import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useFormik } from 'formik'

import { AppContext } from '../context/AppContext'
//API
import { createContact } from '../api/contact'
import { getCountries } from '../api/counties'
//Style
import { ModalStyle } from '../styles/modal'
import { button } from '../styles/var'

const validate = values => {
  const errors = {}
  if (!values.name){
    errors.name ='Este campo es requerido'
  }else if(values.name.legend> 20){
    errors.name = "Debe tener 20 caracteres o menos"
  }
  if (!values.email){
    errors.email = 'Este campo es requerido'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Dirección de email invalida'
  }
  if (!values.number){
    errors.number ='Este campo es requerido'
  }else if(isNaN(values.number)){
    errors.number = 'Este campo es numerico'
  }
  return errors;
}

const Modal = () => {
  const {
    ViewModal, setViewModal,
    dataSend, setDataSend,
    countries, setCountries,
    autorization, setAutorization,
    indicative, setIndicative
  } = useContext(AppContext)
  const [ values, setValues]= React.useState({})

  const formik = useFormik({
    initialValues:{
      name:'',
      number: '',
      email: '',
      comment: '',
    },
    validate,
    onSubmit: personalInfo => {
     const data = {...personalInfo, indicative, autorization}
     console.log(data)
     if(data) {
      createContact(data)
        .then (()=> {
          setAutorization('')
          formik.resetForm()
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
  })

  const handleChange = event => {
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name] : event.target.value
    }))
  }

  const close = () => {
    setViewModal(null)
    setDataSend(false)
    formik.resetForm()
  }

  useEffect(() => {
    getCountries()
      .then(response => response.json())
      .then(result => setCountries(result))
  },[setCountries])

  if(dataSend){
    setTimeout(() => {
      close()
    }, 1500);
  }

  return ViewModal? (
    ReactDOM.createPortal(
      <div className={ModalStyle}>
        <div className="modal-container">
          <div className="close" onClick={()=> close()}>
            <img src="./assets/X.png" alt="Cerrar" width="100%"/>
          </div>
          {!dataSend && (
            <>
            <div className="icon">
              <img src="./assets/contact.jpeg" alt="" width="100%"/>
            </div>
              <h3 className="title">
                Contacto
              </h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="inputFile">
                  <div className="inputRoot">
                    <input
                      type="text"
                      placeholder="Tu nombre y tus apellidos"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value ={formik.values.name}
                    />
                    <fieldset aria-hidden="true">
                      <legend>Nombre Completo</legend>
                    </fieldset>
                  </div>
                  {formik.errors.name ? <div className="error">{formik.errors.name}</div>: null}
                </div>
                <div className="inputFile phoneData">
                  <>
                  <div className="inputRoot indicative">
                    <select name="country" value={indicative} onChange={e=> setIndicative(e.target.value)} >
                      {countries.map(item =>
                        <option key={item.name} value={item.callingCodes}>
                           {item.name}
                        </option>
                      )}
                    </select>
                    <fieldset aria-hidden="true">
                      <legend>País</legend>
                    </fieldset>
                  </div>
                  <div className="inputRoot number">
                    <div className="icon">
                      <img src="./assets/phone.png"  alt="phone" width="100%"/>
                    </div>
                    <input
                      type="text"
                      placeholder="Número"
                      id="number"
                      name="number"
                      onChange={formik.handleChange}
                      value ={formik.values.number}
                      className='inputPhone'
                    />
                    <fieldset aria-hidden="true">
                      <legend>Número de celular</legend>
                    </fieldset>
                  </div>
                  </>
                  {formik.errors.number ? <div className="error errorNumber">{formik.errors.number}</div>: null}
                </div>
                <div className="inputFile">
                  <div className="inputRoot">
                    <input
                      type="text"
                      placeholder="Correo electrónico"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value ={formik.values.email}
                    />
                    <fieldset aria-hidden="true">
                      <legend>Correo electrónico</legend>
                    </fieldset>
                  </div>
                  {formik.errors.email ? <div className="error">{formik.errors.email}</div>: null}
                </div>
                <div className="inputFile">
                  <div className="inputRoot">
                    <textarea
                      placeholder="¿Cuál es el motivo de tu consulta?"
                      id="comment"
                      name="comment"
                      onChange={formik.handleChange}
                      value ={formik.values.comment}
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
                  <button
                     type="submit"
                    className={`${button} btn-contact`}
                  >
                    Enviar datos
                  </button>
                </div>
              </form>
            </>
           )}

          {dataSend && (
            <>
              <div className="icon">
                <img src="./assets/enviada.jpeg" alt="" width="100%"/>
              </div>
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
