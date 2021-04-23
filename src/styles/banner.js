import { style } from 'typestyle'
import { Color, Font } from './var'

export const BannerStyle = style({
  width: '100%',
  height:'100vh',
  backgroundImage:'url("./assets/principalBanner.png")',
  backgroundSize:'cover',
  marginTop: '-150px',
  display:'flex',
  alignItems:'center',
  color: Color.white,
  fontFamily: 'WorkSans-Regular',
  $nest: {
    '& h1':{
      fontSize: Font.megaBig,
      lineHeight:'1.09',
      marginBottom:'23px'
    },
    '& p': {
      fontSize: Font.medium,
      fontStretch: 'normal',
      fontWeight:'bold',
      fontStyle:'normal',
      letterSpacing:'normal'
    },
    '& button':{
      border: 'none'
    },
    '@media screen and (max-width: 700px)':{
      backgroundPosition: 'center',
      backgroundImage:'url("./assets/bannerMobile.jpeg")',
      $nest: {
        '& h1':{
          fontSize:Font.midBig
        }
      }
    }
  }
})