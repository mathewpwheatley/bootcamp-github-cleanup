import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import QuerypullRequests from '../containers/PullRequestTable'

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <div className='col-10 my-4 mx-auto'>
          <QuerypullRequests />
        </div>
      </Router>
    )
  }
}

export default App
