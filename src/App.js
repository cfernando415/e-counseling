import React, { Component } from "react";
import "./App.css";
import CounselorContainer from "./containers/CounselorContainer";
import CounselorProfile from "./components/CounselorProfile";
import { Route, Switch, withRouter } from "react-router-dom";
import ReviewForm from "./components/ReviewForm";
import Homepage from "./containers/Homepage";
import Quizpage from "./components/Quizpage";
import ReferralPage from "./components/ReferralPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Session from "./containers/session";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counselors: [],
      patients: [],
      quizResults: {},
      sockets: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(res => res.json())
      .then(data => {
        let counselorList = data
          .filter(user => user.specialty !== null)
          .map(counselor => ({ ...counselor, status: "offline" }));
        let patientList = data.filter(user => user.specialty === null);
        this.setState({
          counselors: counselorList,
          patients: patientList
        });
      });
  }

  quizHandler = results => {
    console.log(results);
  };

  loginHandler = user => {
    if (user.role === "counselor") {
      const { counselors } = this.state;
      counselors.forEach(counselor => {
        if (counselor.email.toLowerCase() === user.email.toLowerCase()) {
          counselor.status = "online";
        }
      });
      this.setState({ counselors });
    }
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/session" component={Session} />
          <Route
            path="/counselorprofile/:id"
            render={() => (
              <CounselorProfile
                counselors={this.state.counselors}
                {...this.props}
              />
            )}
          />
          <Route
            path="/counselors"
            render={() => (
              <CounselorContainer counselors={this.state.counselors} />
            )}
          />
          <Route path="/referral" component={ReferralPage} />
          <Route path="/review" component={ReviewForm} />
          <Route
            path="/login"
            render={() => <Login loginHandler={this.loginHandler} />}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path="/quiz"
            render={() => <Quizpage results={this.quizHandler} />}
          />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
