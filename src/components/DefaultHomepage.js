import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const DefaultHomepage = props => {
  return (
    <div>
      <h1 className="Homepage text title">Let's talk about it.</h1>
      <br />
      <br />
      <span className="Homepage text span-1">It's understandable that sometimes, life gets tough.</span>
      <br />
      <br />
      <span className="Homepage text span-2"> We believe that it's important to voice out these concerns before they can take a turn for the worse. </span>
      <br />
      <br />
      <span className="Homepage text span-3">Would you like to take a quiz to see if this is a good time to speak with a professional?</span>
      <br />
      <Link to='/quiz'><button className='Homepage-button'>Definitely!</button></Link>
      <Link to='/referral'><button className='Homepage-button'>Not Right Now</button></Link>
    </div>
  )
}

export default DefaultHomepage 