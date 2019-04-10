import React from 'react';
import "../App.css";

const DefaultHomepage = props => {
    return (
        <div>
                <h1 className="Homepage text title">Let's talk about it.</h1>
                <br />
                <br />
                <span className="Homepage text span-1">It's understandable that sometimes, life gets tough.</span>
                <br />
                <br />
                <span className="Homepage text span-2"> We believe that it's important to voice out these concerns before they can take a turn for the worse. </span>
                <br />
                <br />
                <span className="Homepage text span-3">Would you like to take a quiz to see if this is a good time to speak with a professional?</span>
                <br />
                <button className="Homepage-button" onClick={event => props.redirectToQuizHandler()}>Definitely!</button>
                <button className="Homepage-button" onClick={event => props.redirectToReferralHandler()}>Not Right Now</button>
            </div>
    )
}

export default DefaultHomepage 