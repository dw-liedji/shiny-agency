import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Freelances from './pages/Freelances'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Error from './components/Error'
import Header from './components/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import colors from './utils/styles/colors'
import FreelanceDetails from './pages/FreelanceDetails'

const GlobalStyle = createGlobalStyle`
  
*,*::before, *::after {
  box-sizing: border-box;
}

/* Typography */

html {
  font-size: 62.5%;
}

body {
  font-family: 'Trebuchet MS', Inter, Arial, Helvetica, sans-serif;
  font-size: 2.4rem;
  line-height: 1.5;
  margin: 0;
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
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route path="/freelanceDetails/:freelancesId">
          <FreelanceDetails />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
