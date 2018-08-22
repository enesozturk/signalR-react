import React, { Component } from "react";
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from '../store'
import Home from './presentational/Home';
import Login from './presentational/Login'
import Profile from './presentational/Profile'
import { hot } from 'react-hot-loader'
import { AppContainer } from './container/AppContainer'
import SignUp from "./presentational/SignUp";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route render={({ location }) => (
            <AppContainer>
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/profile' component={Profile} />
              </Switch>
            </AppContainer>
          )}>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default hot(App);