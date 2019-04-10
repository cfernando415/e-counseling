import React, { Component } from 'react'
import './App.css'
import CounselorContainer from './containers/CounselorContainer'
import CounselorProfile from './components/CounselorProfile'
import { Route, Switch, withRouter } from 'react-router-dom'

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
    return (
      <div>
        <Switch>
          <Route
            path='/counselorprofile/:id'
            render={() => <CounselorProfile counselors={this.state.counselors} {...this.props} />}
          />
          <Route
            path='/counselors'
            render={() => <CounselorContainer counselors={this.state.counselors} />}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
