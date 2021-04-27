import { style } from 'typestyle'
import { Color, Font } from './var'

export const HelpsStyle = style({
  width: '100%',
  fontFamily: 'Lato-Regular',
  display: 'flex',
  flexDirection:'column',
  marginBottom:'120px',
  paddingTop:'120px',
  overflowX: 'hidden',
  $nest: {
  '& .helpsInfo':{
    display:'grid',
    gridTemplateColumns: '50% 50%',
    gridGap: '70px',
    $nest: {
      '& .item1':{
        width:'100%',
        $nest: {
          '& p': {
            marginTop: '40px'
          }
        }
      },
      '& .item2':{
        width:'100%',
        boxSizing:'border-box',
        $nest: {
          '& .option':{
            display:'flex',
            paddingBottom:'60px',
            $nest: {
              '& .infoOption':{
                
                margin:'0',
                marginLeft:'20px',
                marginTop:'10px'
              },
              '@media screen and (max-width: 700px)':{
                paddingBottom:'30px'
              }
            }
          },
          '@media screen and (max-width: 1024px)':{
            paddingRight: '80px',
            $nest: {
              '@media screen and (max-width: 700px)':{
                paddingRight: '30px',
              }
            }
          }
        }
      }
    }
  },
   '& .image':{
      paddingLeft:'30px',
      paddingRight:'40px',
      boxSizing:'border-box',
      marginTop:'100px'
   },
   '& h2':{
     fontSize: Font.midBig,
     color: Color.darkBlue,
     margin:'0'
   },
   '& p':{
     color: Color.grey,
     width:'100%'
   },
   '@media screen and (max-width: 700px)': {
     '& .helpsInfo': {
       display:'flex',
       flexDirection:'column',
       gridGap: '30px',
     },
     '& h2':{
      fontSize: Font.big,
     },
     '& p':{
      width:'100%'
    },
    '& .image':{
      marginTop:'40px'
    },
    
   }
  }
})
