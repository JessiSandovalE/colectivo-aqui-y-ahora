import React, { useContext } from 'react'
import parse from 'html-react-parser'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import { AppContext } from '../context/AppContext'
import {container} from '../styles/var'
import {ProgramsStyle} from '../styles/programs'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const Programs = () => {
  const [expanded, setExpanded] = React.useState('panel1')
  const { programs } = useContext(AppContext)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div id="programs" className={`${container} ${ProgramsStyle}`} >
      <h2>Nuestros Programas</h2>
      {programs.map(item => (
        <Accordion
        key={item.id}
        expanded={expanded === item.id}
        onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={<ArrowUpwardIcon />}
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
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default Programs
