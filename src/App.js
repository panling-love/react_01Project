import React from 'react'
import './App.scss'
import Login from './views/login/index'
import {Switch ,Route,BrowserRouter} from 'react-router-dom'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
