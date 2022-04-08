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
import colors from './utils/styles/colors'
import GlobalStyle from './utils/styles/GlobalStyle'
import FreelanceDetails from './pages/FreelanceDetails'
import {ThemeProvider} from './utils/utils/context'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
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
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
