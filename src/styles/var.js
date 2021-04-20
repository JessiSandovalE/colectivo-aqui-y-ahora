import { style } from 'typestyle'

/* Colors */

export const Color = {
  darkBlue: '#006890',
  blue: '#0099DB',
  green: '#8CC82D',
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
  minWidth:'200px'
})

export const container = style({
  width:'100%',
  padding:'0 140px',
  boxSizing:'border-box'
})
