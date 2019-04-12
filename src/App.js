import React, { Component } from 'react'
import './App.css'
import CounselorContainer from './containers/CounselorContainer'
import CounselorProfile from './components/CounselorProfile'
import { Route, Switch, withRouter } from 'react-router-dom'
import ReviewForm from './components/ReviewForm'
import Homepage from './containers/Homepage'
import Quizpage from './components/Quizpage'
import QuizPageThanks from './components/QuizPageThanks';
import ReferralPage from './components/ReferralPage'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counselors: [],
      patients: [],
      quizResults: {}
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

  quizHandler = (results) => {
    console.log(results)
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
          <Route
            path='/referral'
            component={ReferralPage}
          />
          <Route
            path='/review'
            component={ReviewForm}
          />
          <Route
            path='/login'
            component={Login}
          />
          <Route
            path='/signup'
            component={Signup}
          />
          <Route
            path='/quiz'
            render={()=> <Quizpage results={this.quizHandler}/>}
          />
          <Route 
            path='/thanks'
            component={QuizPageThanks}
          />
          <Route
            path='/'
            component={Homepage}
          />
        </Switch>
      </div>
    )
  }

}

export default withRouter(App)
