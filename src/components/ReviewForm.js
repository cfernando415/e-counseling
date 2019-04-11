import React, { Component } from 'react'
import ReactStars from 'react-stars'

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 0,
            content: '',

        }
    }
    ratingChanged = (newRating) => {
        this.setState({
            rating: newRating
        })
      }

      changeHandler = (e) => {
          this.setState({
              content: e.target.value
          })
      }

        
  render () {

    return (
      <div>
        <h2>We hope helped!</h2>
        <h3>Please leave a review of your experience with this counselor.</h3>
        <form className='review-form'>
          <label>Rating</label>
          <div className='rater'>
            <ReactStars
              count={5}
              onChange={this.ratingChanged}
              size={24}
              color2={'#ffd700'} 
              value={this.state.rating}
            />
          </div>
          <br />
          <label>Review</label>
          <br />
          <textarea rows="5" cols="60" value={this.state.content} onChange={this.changeHandler}/>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default ReviewForm
