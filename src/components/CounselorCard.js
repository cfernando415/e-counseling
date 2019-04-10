import React from 'react'
import { Link } from 'react-router-dom';
// import CounselorProfile from './CounselorProfile';


class CounselorCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chosenCounselor: {}
    }
  }

  clickHandler (e, counselor) {
    this.setState({
      chosenCounselor: counselor
    })
    // this.props.counselorChosen(counselor)
  }

  render () {
    let truncatedBio = this.props.counselor.bio.substring(0, 200)
    let { counselor } = this.props
    return (
      <div className="counselor-card-container">
        <div className="counselor-card-img">
          <img className="counselor-img" src={counselor.image} alt="counselor pic" />
        </div>
        <div className="counselor-card-bio">
          <Link to={`/counselorprofile/${counselor.id}`}>
            <h3 onClick={(e) => this.clickHandler(e, counselor)}>{counselor.name}</h3>
          </Link>
          <p>{truncatedBio}...</p>
        </div>
      </div>
      
    )
  }
}
export default CounselorCard
