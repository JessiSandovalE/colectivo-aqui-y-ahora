import { style } from 'typestyle'
import { Color, Font } from './var'

export const ProgramsStyle = style({
  width: '100%',
  paddingTop: '50px',
  paddingBottom: '50px',
  fontFamily: 'Lato-Regular',
  marginBottom:'120px',
  $nest: {
    '& h2':{
      color: Color.darkBlue,
      fontSize: Font.midBig,
      lineHeight:'1.1',
      letterSpacing:'normal'
    },
    '& h4':{
      color: Color.darkBlue,
      fontFamily: 'Lato-Regular',
      fontSize:Font.principal
    },
    '& p':{
      color: Color.grey,
      fontFamily: 'Lato-Regular',
      lineHeight:'1.41',
      letterSpacing:'0.5px'
    },
    '& .title':{
      color: Color.darkBlue,
      fontFamily: 'Lato-Regular',
      fontSize: Font.intermedium,
      lineHeight: '1.52',
      letterSpacing: '0.15px'
    },
    '& .image': {
      width:'40%',
      marginTop:'50px'
    },
    '& .info': {
      padding: '50px 0px 50px 0px',
      boxSizing:'border-box',
      width:'540px',
    }
  },
  '& .MuiAccordionSummary-root': {
    borderBottom: '1px solid #006890',
    padding: '0px'
  },
  '& .MuiAccordionDetails-root': {
    padding: 0,
    justifyContent: 'space-between'
  },
  '& .MuiAccordion-root:before': {
    height: '0px'
  },
  '& .MuiSvgIcon-root':{
    color: Color.darkBlue,
    fontSize:'28px'
  }

})