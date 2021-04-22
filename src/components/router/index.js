import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import App from '../../containers/App'


const Nav = () => {
  return(
    <Switch>
      <Route path = "/" component={App}>
      </Route>
    </Switch>
  )
}

export default Nav