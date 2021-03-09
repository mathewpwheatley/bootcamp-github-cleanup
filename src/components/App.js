import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import PullRequests from '../containers/PullRequests'

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <div className='col-10 my-4 mx-auto'>
          <PullRequests />
        </div>
      </Router>
    )
  }
}

export default App
