import React, {Component} from 'react';
import DefaultHomepage from '../components/DefaultHomepage';
import ReferralPage from '../components/ReferralPage';
import QuizPage from '../components/Quizpage';
import '../App.css';

export default class Homepage extends Component {

    // state={
    //     homepage: "default"
    // }

    // homepageHandler = () => {
    //     switch(this.state.homepage) {
    //         case "default":
    //             return <DefaultHomepage redirectToReferralHandler={event => this.redirectToReferralHandler()} redirectToQuizHandler={event => this.redirectToQuizHandler()}/>
    //         case "referral-page":
    //             return <ReferralPage redirectToHomepageHandler={event => this.redirectToHomepageHandler()}/>
    //         case "quiz-page":
    //             return <QuizPage />
    //         default:
    //             return <DefaultHomepage redirectToReferralHandler={event => this.redirectToReferralHandler()} redirectToQuizHandler={event => this.redirectToQuizHandler()}/>
    //     }
    // }

    // redirectToReferralHandler = event => {
    //     this.setState({homepage: "referral-page"})
    // }

    // redirectToHomepageHandler = event => {
    //     this.setState({homepage: "default"})
    // }

    // redirectToQuizHandler = event => {
    //     this.setState({homepage: "quiz-page"})
    // }

  render () {
    return (
      <DefaultHomepage />
    )
  }
}
