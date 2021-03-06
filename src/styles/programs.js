import { style } from 'typestyle'
import { Color, Font } from './var'

export const ProgramsStyle = style({
  width: '100%',
  paddingTop: '50px',
  paddingBottom: '50px',
  fontFamily: 'Lato-Regular',
  boxSizing:'border-box',
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
    '& li':{
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
      marginTop:'50px',
      $nest: {
        '& img':{
          width:'90%',
          $nest:{
            '@media screen and (max-width: 700px)':{
              width:'100%'
            }
          }
        }
      }
    },
    '& .info': {
      padding: '50px 0px 50px 0px',
      boxSizing:'border-box',
      width:'60%',
    },
    '& .btnModal':{
      display: 'none',
    }
  },
  '& .MuiAccordionSummary-root': {
    borderBottom: '1px solid #006890',
    padding: '0px'
  },
  '& .MuiAccordionDetails-root': {
    padding: 0,
    justifyContent: 'space-between',
  },
  '& .MuiAccordion-root:before': {
    height: '0px'
  },
  '& .MuiSvgIcon-root':{
    color: Color.darkBlue,
    fontSize:'28px'
  },
  '@media screen and (max-width: 700px)':{
    '& .MuiAccordionDetails-root': {
      flexDirection: 'column'
    },
    '& .image': {
      width:'100%',
      marginTop:'30px',
     
    },
    '& .info': {
      padding: '30px 0',
      boxSizing:'border-box',
      width:'100%',
    },
    '& h2':{
      fontSize:Font.big
    },

    '& .btnModal':{
      display: 'block',
      width:'50%',
      padding:'10px',
      alignSelf: 'center',
      marginBottom:'20px'
    },
    '& .btnModal:hover': {
      backgroundColor: Color.darkGreen
    },
  }

})