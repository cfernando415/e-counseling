import React from 'react'
// import CounselorProfile from './CounselorProfile'

const CounselorCard = (props) => {
    let truncatedBio = props.counselor.bio.substring(0, 200)
    
    let { counselor } = props
    return (
        <div>
            <img src={counselor.image} alt="counselor pic" />
            <h1>{counselor.name}</h1>
            <p>{truncatedBio}...</p>
        </div>
    )
}
export default CounselorCard
