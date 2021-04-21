import { style } from 'typestyle'
import { Color, Font } from './var'

export const HelpsStyle = style({
  width: '100%',
  fontFamily: 'Lato-Regular',
  display: 'flex',
  flexDirection:'column',
  marginBottom:'120px',
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
        $nest: {
          '& .option':{
            display:'flex',
            //alignItems:'center',
            paddingBottom:'60px',
            $nest: {
              '& .infoOption':{
                maxWidth: '420px',
                margin:'0',
                marginLeft:'20px',
                marginTop:'10px'
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
     width:'530px'
   }
  }
})
