import { style } from 'typestyle'
import { Color, Font } from './var'

export const MethodologyStyle = style({
  width: '100%',
  fontFamily: 'Lato-Regular',
  backgroundColor: Color.darkBlue,
  color: Color.white,
  paddingTop:'120px',
  paddingBottom:'90px',
  boxSizing:'border-box',
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  $nest: {
    '& .itemMethodology': {
      display: 'flex',
      flexDirection: 'column',
      $nest: {
        '& .methodologyInfo': {
          marginBottom: '90px',
          paddingRight:'0px',
          boxSizing:'border-box',
          $nest: {
            '& h2':{
              fontSize: Font.midBig,
              fontFamily:'Lato-Bold',
              lineHeight:'1.1',
              letterSpacing:'normal',
            },
            '& p':{
              width: '440px'
            }
          }
        },
      }
    },
    '& .image':{
      width:'100%'
    },
    '& .itemInfo': {
      width: '440px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      $nest: {
        '& .item': {
          padding: '5px 0',
          boxSizing:'border-box'
        }
      }
    },
    '& p': {
      fontSize: Font.principal,
    },
    '& h4':{
      fontSize: Font.medium,
      margin: '0',
      marginBottom: '8px',
    },
    '@media screen and (max-width: 1024px)': {
      display: 'grid',
      $nest: {
        '& .itemMethodology': {
          paddingRight:'16px',
          boxSizing:'border-box',
          $nest: {
            '& .methodologyInfo':{
              width: '100%',
              $nest: {
                '& p':{
                  width: '100%',
                  paddingRight: '30px',
                  boxSizing:'border-box'
                },
              }
            }
          }
        },
        '& .itemInfo':{
          width:'100%',
          paddingRight: '50px',
          boxSizing:'border-box'
        },
        '@media screen and (max-width: 700px)':{
          display:'flex',
          flexDirection:'column',
          paddingTop:'70px',
          paddingBottom:'0px',
          $nest: {
            '& .itemMethodology': {
              width:'100%',
              $nest: {
                '& .methodologyInfo':{
                  paddingRight:'16px',
                  marginBottom: '47px',
                  boxSizing:'border-box',
                  $nest: {
                    '& p':{
                      width: '100%'
                    },
                    '& h2':{
                      marginTop:'0px'
                    }
                  }
                },
              }
            },
            '& .itemInfo':{
              width:'100%',
              padding: '70px 16px',
              boxSizing:'border-box'
            }
          }
        },
      }
    },

  }
})