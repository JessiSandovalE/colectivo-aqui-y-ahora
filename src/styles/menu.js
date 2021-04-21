import { style } from 'typestyle'

import { Color, Font } from './var'
export const menuStyle = style({
  width: '100%',
  height: '120px',
  paddingLeft:'30px',
  paddingRight:'40px',
  boxSizing: 'border-box',
  display: 'flex',
  position: 'sticky',
  top: '0',
  fontFamily: 'Lato-Regular',
  alignItems: 'center',
  zIndex:'1001',
  $nest: {
    '& .logo':{
      width: '25%',
      color: Color.white,
      display:'flex',
      alignItems:'center',
      $nest: {
        '& img': {
          width: '80px',
          height: '80px'
        }
      }
    },
    '& .navbar':{
      width: '75%',
      backgroundColor: Color.white,
      padding: '8px 10px',
      boxSizing:'border-box',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      borderRadius:'5px',
      $nest: {
        '& .options': {
          width: '70%',
          display: 'flex',
          justifyContent:'space-evenly',
        },
        '& .item':{
          fontSize: Font.normal,
          color: Color.darkBlue,
          textDecoration: 'none'
        },
        '& .btn': {
          padding: '10px 30px'
        }
      }
    },
    '@media screen and (max-width: 700px)':{
      display:'none'
    }
  }
})