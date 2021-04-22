import { style } from 'typestyle'
import { Color, Font } from './var'

export const ModalStyle= style({
  position: 'fixed',
   top:'0',
   left: '0',
   bottom: '0',
   right: '0',
   backgroundColor: 'transparent',
   display:'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontFamily: 'Lato-Regular',
   $nest: {
     '& .modal-container':{
        position: 'relative',
        top: '10rem',
        backgroundColor: Color.darkWhite,
        width: '530px',
        display: 'flex',
        flexDirection: 'column',
        padding:'20px',
        boxSizing:'border-box',
        borderRadius: '4px',
        boxShadow: '2px 8px 8px 0 rgba(0, 0, 0, 0.1)',
        $nest: {
          '& .close':{
            position: 'absolute',
            right: '20px',
            top: '10px',
            cursor: 'pointer',
            color: Color.darkBlue,
            fontSize: Font.medium
          },
          '& .title':{
            fontSize: Font.big,
            color: Color.darkBlue,
            marginTop: '15px',
            fontFamily: 'Lato-Bold',
            lineHeight: '1.22',

          }
        }
     }
   }
})