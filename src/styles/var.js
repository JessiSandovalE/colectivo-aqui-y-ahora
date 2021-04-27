import { style } from 'typestyle'

/* Colors */

export const Color = {
  darkBlue: '#006890',
  mediumBlue: '#0f4572',
  activeLink:'#02374B',
  lightBlue:'#1f7eb2',
  blue: '#0099DB',
  green: '#8CC82D',
  darkGreen:'#669E0C',
  white: '#FFFFFF',
  darkWhite: '#F6F6F6',
  grey: '#4F4F4F'
}

export const Font = {
  megaBig: '64px',
  midBig:'51px',
  big: '36px',
  medium: '25px',
  intermedium: '21px',
  principal: '17px',
  normal: '15px',
  small: '13px',
  micro: '10px'
}

export const button = style({
  padding: '7px',
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: Color.green,
  color: Color.white,
  fontSize: Font.normal,
  fontFamily: 'Lato-Bold',
  letterSpacing: '1px',
  cursor: 'pointer',
  appearance: 'none',
  borderRadius: '5px',
  minWidth:'200px',
  $nest: {
    '& .button:hover':{
      backgroundColor:Color.darkGreen
    }
  }
})

export const container = style({
  width:'100%',
  padding:'0 140px',
  boxSizing:'border-box',
  $nest:{
    '@media screen and (max-width: 1024px)':{
      padding:'0 70px',
      boxSizing:'border-box',
    },
    '@media screen and (max-width: 834px)':{
      padding:'0 40px',
      boxSizing:'border-box',
    },
    '@media screen and (max-width: 700px)':{
      padding:'0 16px',
      boxSizing:'border-box',
    }
  }
})
