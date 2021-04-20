import { style } from 'typestyle'
import { Color, Font } from './var'

export const ProgramsStyle = style({
  width: '100%',
  paddingTop: '50px',
  paddingBottom: '50px',
  fontFamily: 'Lato-Regular',
  $nest: {
    '& h2':{
      color: Color.darkBlue,
      fontSize: Font.big,
    },
    '& h4':{
      color: Color.darkBlue,
      fontFamily: 'Lato-Regular',
    },
    '& p':{
      color: Color.grey,
    },
    '& .title':{
      color: Color.darkBlue,
      fontFamily: 'Lato-Regular',
      fontSize: Font.intermedium
    },
    '& .image': {
      width:'40%',
      marginTop:'50px'
    },
    '& .info': {
      width: '60%',
      padding: '50px 0px 50px 100px',
      boxSizing:'border-box'
    }
  },
  '& .MuiAccordionSummary-root': {
    borderBottom: '1.5px solid #006890',
    padding: '0px'
  },
  '& .MuiAccordionDetails-root': {
    padding: 0
  },
  '& .MuiAccordion-root:before': {
    height: '0px'
  }

})