import { style } from 'typestyle'
import { Color, Font } from './var'

export const AboutStyle = style({
  width: '100%',
  fontFamily: 'Lato-Regular',
  display: 'flex',
  flexDirection: 'column',
  marginBottom:'120px',
  $nest: {
    '& .aboutImage': {
      width: '839px',
      marginTop: '-20px'
    },
    '& .aboutInfo': {
      width:'100%',
      display:'flex',
      justifyContent: 'flex-end',
      $nest: {
        '& .aboutText': {
          //width: '531px',
          width:'50%',
          paddingRight:'140px',
          color: Color.darkBlue,
          fontSize: Font.intermedium,
          marginTop:'30px',
          boxSizing:'border-box'
        }
      },
    },
    '& .aboutSection':{
      width: '100%',
      display: 'flex',
      marginTop: '80px',
      $nest: {
        '& .aboutSectionImage': {
          width: '50%'
        },
        '& .aboutSectionInfo':{
          width: '50%',
          paddingLeft: '80px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          $nest: {
            '& .item':{
              display:'flex',
              alignItems:'center',
              padding:'20px 0',
              $nest: {
                '& .icon':{
                  alignSelf:'flex-start',
                  paddingTop:'5px',
                  boxSizing:'border-box'
                },
                '& .aboutSectionText':{
                  marginLeft: '30px',
                  marginBottom:'0px',
                  lineHeight: '1.52',
                  color: Color.grey,
                  fontSize: Font.principal,
                  width:'265px',
                  $nest: {
                    '& .aboutTitle':{
                      color: Color.darkBlue,
                      fontSize: Font.intermedium,
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }
})