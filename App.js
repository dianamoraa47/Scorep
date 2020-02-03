import React, { Component } from 'react'
import Navbar from './components/Navbar'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        "",
        "",
        ""
      ]
    }
  }

  render() {
    return (
      <div>
        
            <Home/>
            <Navbar/>
      </div>
     
      // <Router>
      //   <Switch>
      
           //<Route exact path='/' component={Home} />
      //   </Switch>
      // </Router>
    )
  }
}

export default App
