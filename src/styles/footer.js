import { style } from 'typestyle'
import { Color, Font } from './var'

export const FooterStyle = style({
  width: '100%',
  fontFamily: 'Lato-Regular',
  display: 'flex',
  flexDirection:'column',
  marginBottom:'60px',
  $nest: {
    '& .top': {
      borderBottom: '1px solid',
      borderColor : Color.darkBlue,
    },
    '& .bottom': {
      display: 'grid',
      gridTemplateColumns: '40%  30%  30%',
      paddingTop: '50px',
      boxSizing:'borderBox',
      $nest: {
        '& .address': {
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-end',
        },
        '& .contact': {
          display:'flex',
          flexDirection:'column',
          $nest: {
            '& .phone':{
              marginTop:'25px'
            },
            '& img': {
              width:'48px',
              height:'48px'
            },

          }
        },
        '& .social': {
          width:'100%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          $nest: {
            '& .redes':{
              display:'flex',
              justifyContent:'space-between'
            }
          }
        }
      }
    },
    '& h3': {
      fontSize: Font.big,
      color: Color.darkBlue,
      width: '530px',
      fontFamily: 'Lato-Bold',
      margin: '7px 0px',
    },
    '& p':{
      fontSize: Font.principal,
      color: Color.grey,
      margin: '0px',
      marginTop: '7px'
    },
    '& .title': {
      fontSize: Font.intermedium,
      color: Color.blue,
      margin: '0px'
    },
    '& .item': {
      display: 'flex',
      alignItems:'center',
      $nest:{
        '& p': {
          paddingLeft: '15px',
          boxSizing:'border-box'
        }
      }
    },
  }

})
