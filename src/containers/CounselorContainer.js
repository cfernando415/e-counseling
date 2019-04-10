import React from 'react'
import CounselorCard from '../components/CounselorCard'

const CounselorContainer = (props) => {
  return (
    <div>
      <h1>Counselor Container</h1>
      {props.counselors.map((counselor)=>
        <CounselorCard counselor={counselor}/>
        )}
    </div>
  )
}
export default CounselorContainer
