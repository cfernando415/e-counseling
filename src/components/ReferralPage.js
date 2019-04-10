import React from 'react';
import '../App.css';

const ReferralPage = props => {
    return (
        <div>
            <h3>Counsel-Me</h3>
            <span>Thank you for visiting our page!</span>
            <br />
            <span> If you feel that our page would benefit a loved one or you would like to return at another time, here's our link!</span>
            <br />
            <span>www.counsel-me.com</span>
            <br />
            <button onClick={event => props.redirectToHomepageHandler()}>Return to original page</button>
        </div>
    )
}

export default ReferralPage;