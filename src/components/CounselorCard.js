import React from 'react'
// import CounselorProfile from './CounselorProfile'

const CounselorCard = (props) => {
  let truncatedBio = props.counselor.bio.substring(0, 200)
  let { counselor } = props

  return (
    <div className="counselor-card-container">
      <div className="counselor-card-img">
        <img className="counselor-img" src={counselor.image} alt="counselor pic" />
      </div>
      <div className="counselor-card-bio">
        <h1>{counselor.name}</h1>
        <p>{truncatedBio}...</p>
      </div>
    </div>
  )
}
export default CounselorCard
