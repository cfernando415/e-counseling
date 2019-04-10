import React from 'react'
import CounselorCard from '../components/CounselorCard'
import CounselorProfile from '../components/CounselorProfile'

const CounselorContainer = (props) => {
  // function counselorChosen (chosenCounselor) {
  //   if (chosenCounselor !== {}) {
  //     return (<div><CounselorProfile counselor={chosenCounselor} /></div>)
  //   }
  // }
  return (
    <div>
      <h1>Counselor Container</h1>
      {props.counselors.map((counselor)=>
        <CounselorCard key={counselor.id} counselor={counselor}/>
        )}
    </div>
  )
}
export default CounselorContainer
