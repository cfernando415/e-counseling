import React, { Component } from 'react'
import './App.css'
import CounselorContainer from './containers/CounselorContainer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counselors: [],
      patients: []
    }
  }
  componentDidMount () {
    fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(data => {
      let counselorList = data.filter((user) => user.specialty !== null)
      let patientList = data.filter((user) => user.specialty === null)
      this.setState({
        counselors: counselorList,
        patients: patientList
      })
    })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <CounselorContainer counselors={this.state.counselors} />
      </div>
    )
  }
}

export default App
