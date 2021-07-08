import styled from "styled-components";

const COLORS = {
  default: '#0099FF',
  primary: '#274060',
  foreground: '#274060'
}

const THEME = {
  primary: {    
    color: COLORS.primary
  }, 
  default: {
    color: COLORS.default
  },



  
}

export const Wrapper = styled.div<{
  color: 'default' | 'primary'
}>`
  display: flex;
  flex-direction: column;

  .Value {
    color: ${p => THEME[p.color].color};
  }

  .Currency {
    color: ${p => THEME[p.color].color};
  }

  .Description {
    color: ${p => THEME.primary.color};
  }    
`