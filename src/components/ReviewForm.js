import React, { Component } from 'react'

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: null,
            content: '',

        }
    }

        
  render () {
    
    return (
      <div>
        <h2>We hope helped!</h2>
        <h3>Please leave a review of your experience with this counselor.</h3>
        <div className='review-form'>
          <label>Rating</label>
          <div className='rater'>
          
          </div>
          <label>Review</label>
          <input type='text' value={this.state.content} />
        </div>
      </div>
    )
  }
}
export default ReviewForm
