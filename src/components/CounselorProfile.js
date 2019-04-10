import React from 'react';

const CounselorProfile = (props) => {
  let currentId = parseInt(props.location.pathname.replace(/^\D+/g, ''))
  let currentCounselor = props.counselors.find((counselor) => counselor.id === currentId)
 
  return (
    <div>
      {currentCounselor ? 
        <div >
          <div className='profile-container'>
            <div className='profile-name-pic'>
              <h1>{currentCounselor.name}</h1>
              <img className='profile-pic' src={currentCounselor.image} alt='counselor' />
              <br/>
              <a href={`mailto:${currentCounselor.email}`}>Email Me</a>
              <br />
              <button onClick={props.history.goBack}>Back</button>
            </div>
            <div className='profile-info'>
              <p><b>Specialty:</b> {currentCounselor.specialty}</p>
              <p>{currentCounselor.bio}</p>
            </div>
          </div>
          <div className='reivews'>
            <h2>Reviews</h2>
            {currentCounselor.counselor_reviews.map((review) =>
              <div className='review-box'>
                <p>{review.patient.name}</p>
                <p>{review.rating}</p>
                <p>{review.content}</p>
              </div>
            )}
          </div>
        </div>
        : null}
    </div>
  )
}
export default CounselorProfile
