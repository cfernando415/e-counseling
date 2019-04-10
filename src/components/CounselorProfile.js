import React from 'react';

const CounselorProfile = (props) => {
  let currentId = parseInt(props.location.pathname.replace(/^\D+/g, ''))
  let currentCounselor = props.counselors.find((counselor) => counselor.id === currentId)
  console.log(currentCounselor)
  return (
    <div>
      {currentCounselor ? 
        <div>
          <h1>{currentCounselor.name}</h1>
          
          <img className="profile-pic" src={currentCounselor.image} alt='counselor' />
          <p>{currentCounselor.email}</p>
          <p>{currentCounselor.specialty}</p>
          <p>{currentCounselor.bio}</p>
        </div>
        : null}
    </div>
  )
}
export default CounselorProfile
