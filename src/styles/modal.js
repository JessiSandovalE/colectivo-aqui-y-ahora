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
   zIndex:'1002',
   width:'100%',
   height: '100vh',
   justifyContent:'center',
   $nest: {
     '& .modal-container':{
        position: 'relative',
        top: '0',
        backgroundColor: Color.darkWhite,
        width: '530px',
        display: 'flex',
        flexDirection: 'column',
        padding:'20px',
        boxSizing:'border-box',
        borderRadius: '4px',
        boxShadow: '2px 8px 8px 0 rgba(0, 0, 0, 0.1)',
        maxHeight:'700px',
        $nest: {
          '& .icon': {
            width:'80%',
            zIndex:1,
            marginLeft:'-20px'
          }
          ,
          '& .close':{
            position: 'absolute',
            right: '20px',
            top: '10px',
            cursor: 'pointer',
            color: Color.darkBlue,
            fontSize: Font.medium,
            zIndex:'2'
          },
          '& .title':{
            fontSize: Font.big,
            color: Color.darkBlue,
            marginTop: '-40px',
            fontFamily: 'Lato-Bold',
            lineHeight: '1.22',
            zIndex:'2'

          },
          '& form':{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            $nest: {
              '& .inputFile': {
                margin: '10px 0px',
                position: 'relative',
                display:'inline-flex',
                flexDirection:'column',
                verticalAlign:'top',
                border: '0',
                $nest:{
                  '& label':{
                    position:'absolute',
                    top:'0',
                    left:'0',
                    color: Color.lightBlue,
                    fontSize:Font.small,
                    letterSpacing:'0.4px',
                    zIndex:'1',
                    transition:'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
                  },
                  '& .inputRoot':{
                    position: 'relative',
                    borderRadius:'4px',
                    cursor:'text',
                    display:'inline-flex',
                    $nest: {
                      '& input':{
                        border: '0',
                        height:'1.1876em',
                        margin: '0px',
                        display:'block',
                        padding:'18.5px 14px',
                        marginTop:'7px',
                        color: Color.mediumBlue,
                        width:'100%',
                        backgroundColor: Color.darkWhite,
                        fontFamily: 'Lato-Regular',
                        lineHeight: '1.6',
                        letterSpacing: '0.25px',
                        fontSize:Font.normal,
                      },
                      '& input::placeholder':{
                        color: Color.mediumBlue,
                        fontSize:Font.normal,
                        fontFamily: 'Lato-Regular',
                        lineHeight: '1.6',
                        letterSpacing: '0.25px'
                      },
                      '& textarea::placeholder':{
                        color: Color.mediumBlue,
                        fontSize:Font.normal,
                        fontFamily: 'Lato-Regular',
                        lineHeight: '1.6',
                        letterSpacing: '0.25px'
                      },

                      '& input:focus':{
                        outline:'0'
                      },
                      '& textarea':{
                        border: '0',
                        height: '80px',
                        padding:'18.5px 14px',
                        marginTop:'7px',
                        width: '100%',
                        resize: 'none',
                        backgroundColor: Color.darkWhite,
                        color: Color.mediumBlue,
                        fontFamily: 'Lato-Regular',
                        fontSize:Font.normal,
                        lineHeight: '1.6',
                        letterSpacing: '0.25px'
                      },
                      '& textarea:focus':{
                        outline:'0'
                      },
                      '& fieldset': {
                        display:'block',
                        marginInlineStart:'2px',
                        marginInlineEnd:'2px',
                        paddingBlockStart:'0.35em',
                        paddingInlineStart:'0.75em',
                        paddingInlineEnd:'0.75em',
                        paddingBlockEnd:'0.65em',
                        minInlineSize:'min-content',
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                        top: '0',
                        left:'0',
                        right:'0',
                        bottom:'0',
                        margin: '0',
                        padding:'0 8px',
                        overflow:'hidden',
                        position:'absolute',
                        borderStyle:'solid',
                        borderWidth:'1px',
                        borderRadius:'inherit',
                        pointerEvents:'none',
                        $nest: {
                          '& legend': {
                            maxWidth:'1000px',
                            transition:'max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms',
                            width:'auto',
                            height:'11px',
                            display:'block',
                            fontSize: Font.small,
                            textAlign:'left',
                            color: Color.lightBlue,
                            paddingInlineStart:'2px',
                            paddingInlineEnd:'2px',
                            borderStyle:'none',
                          }
                        }
                      }
                    }
                  }
                }
              },
              '& .terms':{
                display: 'flex',
                justifyContent:'space-between',
                $nest: {
                  '& p':{
                    fontSize: Font.small,
                    color: Color.grey,
                    width: '60%'
                  },
                  '& .options':{
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    $nest: {
                      '& label':{
                        color: Color.lightBlue,
                        fontSize: Font.intermedium
                      }
                    }
                  }
                }
              },
              '& .send': {
                width:'100%',
                display: 'flex',
                paddingTop:'10px',
                justifyContent: 'flex-end',
                $nest: {
                  '& .btn-contact':{
                    padding: '10px'
                  }
                }
              }
            }
          },
          '& .sendBackground':{
            flexGrow:'0',
            margin: '0 63px 51px 0',
            "-webkit-text-stroke": '0.7px rgba(140, 200, 45, 0.2)',
            fontFamily: 'Lato-Regular',
            fontSize: '104px',
            fontStyle: 'italic',
            lineHeight:'1.12',
            letterSpacing:'normal'
          },
          '& .sendTitle': {
            fontSize: Font.big,
            color: Color.green,
            marginTop: '-50px',
            fontFamily: 'Lato-Bold',
            lineHeight: '1.22',
            zIndex:'2'
          },
          '& .textSendInfo': {
            fontSize: Font.principal,
            color: Color.grey,
            lineHeight:'1.41',
            letterSpacing: '0.5px',
            width: '70%'
          }
        }
     }
   }
})