import React, { useContext } from 'react'
import parse from 'html-react-parser'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { AppContext } from '../context/AppContext'
import {container, button} from '../styles/var'
import {ProgramsStyle} from '../styles/programs'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Modal from './Modal'
const Programs = () => {
  const [expanded, setExpanded] = React.useState('panel1')
  const { programs, setViewModal } = useContext(AppContext)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <div id="programs" className={`${container} ${ProgramsStyle}`} >
        <h2>Nuestros Programas</h2>
        {programs.map(item => (
          <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              id={item.id}
            >
                <div className="title">
                {item.title}
                </div>

            </AccordionSummary>
            <AccordionDetails>
              <div className="image">
                <img src={item.image} alt={item.title} width='100%'/>
              </div>
              <div className="info">
                {parse(item.text)}
              </div>
              <div
                className={`${button} btnModal`}
                onClick={()=> setViewModal(true)}
              >
                Quiero más información
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Modal/>
    </>
  )
}

export default Programs
