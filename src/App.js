import React, { Component } from 'react'
import './App.css'
import CounselorContainer from './containers/CounselorContainer'

class App extends Component {
  state = {
    users: []
  }

  componentDidMount(){
    
  }
  render () {
    return (
      <div>
        <CounselorContainer />
      </div>
    )
  }
}

export default App
