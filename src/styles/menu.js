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
      zIndex:'10001',
      $nest: {
        '& img': {
          width: '80px',
          height: '80px',
          $nest: {
            '@media screen and (max-width: 320px)':{
              width: '60px',
              height: '60px',
            }
          }
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
      filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06))',
      $nest: {
        '& .options': {
          width: '70%',
          display: 'flex',
          justifyContent:'space-evenly',
        },
        '& .item':{
          fontSize: Font.normal,
          color: Color.darkBlue,
          textDecoration: 'none',
          $nest:{
            '@media screen and (max-width: 1024px)':{
              fontSize: Font.small
            }
          }
        },
        '& .btn': {
          padding: '10px 30px',
          $nest: {
            '@media screen and (max-width: 700px)':{
              padding: '10px'
            }
          }
        },
        '& .btn:hover': {
          backgroundColor:Color.darkGreen
        },
        '@media screen and (max-width: 834px)':{
          display:'none'
        }
      }
    },
    '& .responsive-nav':{
      display: 'none',
      $nest: {
        '@media screen and (max-width: 834px)':{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }
      }
    },
    '& .responsive-nav .active':{
      $nest:{
        display:'flex',
      }
    },
    '& .inactive': {
      display:'none'
    },
    '& .activeMenu':{
      display:'flex',
      flexDirection: 'column',
      width:'100%',
      height: '100vh',
      backgroundColor:Color.darkBlue,
      zIndex:'100',
      position:'fixed',
      padding: '40px 37px 50px 37px',
      boxSizing:'border-box',
      alignItems: 'center',
      fontSize:'25px',
      lineHeight:'1.4',
      justifyContent:'center',
      overflowY: 'hidden',
      top: 0 ,
      right: 0,
      bottom: 0,
      left: 0,
      $nest: {
        '& .options':{
          display:'flex',
          flexDirection:'column',
          textAlign: 'right',
          $nest: {
            '& .item':{
              fontSize: Font.medium,
              color: Color.white,
              textDecoration: 'none',
              lineHeight:'3',
              
            },
          }
        },
      }
  },
    '& .contIcon': {
      flexDirection: 'row',
      display: 'none',
      order: 1,
      $nest: {
        '@media screen and (max-width: 834px)': {
        display: 'flex',
        fontSize: '25px',
        zIndex:'101'
        },
        '& .hamburgerIcon': {
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          position: 'relative',
          zIndex: '101',
          margin:'10px 16px ',
          backgroundColor: Color.white,
          filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06))',
          $nest: {
            '& .lines': {
                position: "absolute",
                top: '50%',
                left: '50%',
                transform: 'translate (-50%, -50%)',
                height: '2px',
                width: '50%',
                backgroundClip: 'padding-box',
                backgroundColor: Color.darkBlue,
                transition: ' all 0.5s cubic-bezier(0.86, 0, 0.07, 1)'
            },
            '& .lines:nth-child(1)':{
                transform:' translate(-50%, calc(-50% - 8px))',
            },
            '& .lines:nth-child(2)':{
                transform:' translate(-50%, calc(-50% + 0px))',
            },
            '& .lines:last-child': {
                transform: 'translate(-50%, calc(-50% + 8px))'
            },
            '@media screen and (max-width: 320px)':{
              width: '50px',
              height: '50px',
            }
          }
         },
         '& .active' :{
          '& .lines':{
            background: Color.darkBlue,
          },
          '& .lines:nth-child(1)'  : {
              transform:' translate(-50%, -50%) rotate(45deg)',
          },
          '& .lines:nth-child(2)': {
              opacity: 0
          },
          '& .lines:nth-child(3)': {
              transform:'translate(-50%, -50%) rotate(-45deg)',

          }
      },
      }
    },
    '& .active':{
      color: `${Color.activeLink} !important`,
    },
    '@media screen and (max-width: 700px)':{
      justifyContent:'space-between',
      paddingRight:'0px',
      paddingLeft:'10px',
      height: '110px',
    }
  }
})