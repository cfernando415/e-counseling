import React, {Component} from 'react';
import '../App.css'

export default class Quizpage extends Component {

    state = {
        question1response: null,
        question2response: null,
        question3response: null,
        question4response: null
    }

    validateQuestions = () => {
            if (this.state.question1response === null){
            alert("Cannot continue without answering question 1!")
            } else if (this.state.question2response === null){
            alert("Cannot continue without answering question 2!")
            } else if (this.state.question3response === null){
            alert("Cannot continue without answering question 3!")
            } else if (this.state.question4response === null){
            alert("Cannot continue without answering question 4!")
            } else {
            alert("All questions have been answered!")
            }
        }

    responseHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3 className="Quiz-Directions">Please select True or False for the following questions: </h3>
                <br />
                <p className="Quiz-Question">1. For the last two weeks, I have felt like I have low energy, an excessive amount of negative intrusive thoughts, and / or an abnormal need to isolate myself from others.</p>
                <br />
                <button className="Quiz-Button Quiz-Button-True" id="question1response" value="true" onClick={event => this.responseHandler(event)}>True</button>
                <button className="Quiz-Button Quiz-Button-False" id="question1response" value="false" onClick={event => this.responseHandler(event)}>False</button>
                <br />
                <p className="Quiz-Question">2. I have been having a hard time dealing with anxiety / nervousness, and lately, it has become excessive.</p>
                <br />
                <button className="Quiz-Button Quiz-Button-True" id="question2response" value="true" onClick={event => this.responseHandler(event)}>True</button>
                <button className="Quiz-Button Quiz-Button-False" id="question2response" value="false" onClick={event => this.responseHandler(event)}>False</button>
                <br />
                <p className="Quiz-Question">3. When I feel anger/frustration, my reactions are immediate and/or strong. Because of this, my daily routine and relationships are affected. </p>
                <br />
                <button className="Quiz-Button Quiz-Button-True" id="question3response" value="true" onClick={event => this.responseHandler(event)}>True</button>
                <button className="Quiz-Button Quiz-Button-False" id="question3response" value="false" onClick={event => this.responseHandler(event)}>False</button>
                <br />
                <p className="Quiz-Question">4. I feel the need to use a substance on a daily / weekly basis. If I don't, I have a hard time functioning.</p>
                <br />
                <button className="Quiz-Button Quiz-Button-True" id="question4response" value="true" onClick={event => this.responseHandler(event)}>True</button>
                <button className="Quiz-Button Quiz-Button-False" id="question4response" value="false" onClick={event => this.responseHandler(event)}>False</button>
                <br />
                <button className="Quiz-Button-Finished" onClick={event => this.validateQuestions(event)}>Finished!</button>
            </div>
        )
    }
}