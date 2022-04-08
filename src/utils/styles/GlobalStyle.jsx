import {createGlobalStyle} from 'styled-components'
import colors from './colors'

import {useContext} from 'react'
import {ThemeContext} from '../utils/context'

function GlobalStyle() {
  const {theme} = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

const StyledGlobalStyle = createGlobalStyle`
  
*,*::before, *::after {
  box-sizing: border-box;
}

* {
    font-family: 'Trebuchet MS', Inter, Arial, Helvetica, sans-serif;
}

/* Typography */

html {
  font-size: 62.5%;
}

body {
  font-size: 2.4rem;
  line-height: 1.5;
  margin: 0;
  background-color: ${({isDarkMode}) => (isDarkMode ? 'black' : 'white')};
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 4rem;
}
h3 {
  font-size:3rem;
}

h1, h2, h3 {
  color: ${colors.primary};
  margin-bottom: 1rem;
  line-height: 1.1;
}

p {
  margin-top: 0px;
}

@media screen and (min-width:1024px) {
  body{
      font-size: 1.8rem;
  }

  h1 {
      font-size: 8rem;
  }

  h3 {
      font-size: 4rem;
  }

  h3 {
      font-size: 2.4rem;
  }
}
`
export default GlobalStyle
