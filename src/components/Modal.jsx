import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../context/AppContext'
import { ModalStyle } from '../styles/modal'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import { button } from '../styles/var'
const useStyles = makeStyles({
  root: {
    minWidth: 120,
    marginTop: 10
  },
});

const Modal = () => {
  const [age, setAge] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const {
    ViewModal, setViewModal
  } = useContext(AppContext)
  return ViewModal? (
    ReactDOM.createPortal(
      <div className={ModalStyle}>
        <div className="modal-container">
          <div
            className="close"
            onClick={()=> setViewModal(null)}
          >
            X
          </div>
          <h3 className="title">
            Contacto
          </h3>
          <form>
            <TextField
              id="name"
              label="Nombre Completo"
              placeholder="Tu nombre y tus apellidos"
              variant="outlined"
              fullWidth
            />
            <div>
              <label htmlFor="">Nombre Completo</label>
              <input type="text" placeholder="Tu nombre y tus apellidos"/>
            </div>
            <div>
              <label htmlFor="">Número de celular</label>
              <input type="text" placeholder="Número"/>
            </div>
            <div>
              <label htmlFor="">Correo electrónico</label>
              <input type="text" placeholder="Correo electrónico"/>
            </div>
            <div>
              <label htmlFor="">Comentario (Opcional)</label>
              <textarea placeholder="¿Cuál es el motivo de tu consulta?">

              </textarea>
            </div>
            <p>
            Autorizo el manejo de mis datos personales de acuerdo a las políticas de tratamiento de datos del Colectivo Aqui y Ahora
            </p>
            <input type="radio" id="male" name="gender" value="male" />
              <label for="si">Si</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="no">No</label>
            <div className={button}>Enviar datos</div>
          </form>
        </div>
      </div>,
     document.getElementById('modal')
    )
  ): <div/>
}

export default Modal
