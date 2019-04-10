import React, {Component} from 'react';
import DefaultHomepage from '../components/DefaultHomepage';
import ReferralPage from '../components/ReferralPage';
import '../App.css';

export default class Homepage extends Component {

    state={
        homepage: "default"
    }

    homepageHandler = () => {
        switch(this.state.homepage) {
            case "default":
                return <DefaultHomepage redirectToReferralHandler={event => this.redirectToReferralHandler()}/>
            case "referral-page":
                return <ReferralPage redirectToHomepageHandler={event => this.redirectToHomepageHandler()}/>
            default:
                return <DefaultHomepage redirectToReferralHandler={event => this.redirectToReferralHandler()}/>
        }
    }

    redirectToReferralHandler = event => {
        this.setState({homepage: "referral-page"})
    }

    redirectToHomepageHandler = event => {
        this.setState({homepage: "default"})
    }


    render(){
        return(
            this.homepageHandler()
        )
    }
}