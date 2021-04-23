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
      lineHeight:'1.8'
    },
    '& a':{
      fontSize: Font.principal,
      color: Color.grey,
      margin: '0px',
      textDecoration:'none',
      lineHeight:'1.8'
    },
    '& .title': {
      fontSize: Font.intermedium,
      color: Color.blue,
      margin: '0px'
    },
    '& .item': {
      display: 'flex',
      alignItems:'center',
      marginBottom:'7px',
      $nest:{
        '& p': {
          paddingLeft: '15px',
          boxSizing:'border-box'
        }
      }
    },
    '& .btnModal':{
      display: 'none',
    },
    '@media screen and (max-width: 700px)':{
      marginBottom:'30px',
      $nest: {
        '& .bottom':{
          gridTemplateColumns: '1fr',
          paddingTop:'30px',
          $nest: {
            '& .contact':{
              marginTop: '36px'
            },
            '& .social':{
              marginTop: '25px',
              $nest: {
                '& .redes':{
                  marginTop: '24px',
                  width:'280px'
                }
              }
            }
          }
        },
        '& h3':{
          fontSize: Font.medium,
          width:'100%'
        },
        '& p':{
          lineHeight: '1.82'
        },
        '& .btnModal':{
          display: 'block',
          width:'50%',
          padding:'10px',
          alignSelf: 'center',
          marginBottom:'20px',
          marginTop: '30px'
        },
        '& .btnModal:hover':{
          backgroundColor:Color.green
        }
      }
    }
  },

})
