/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Fragment } from 'react'
import RTCMulticonnection from 'rtcmulticonnection'
import io from 'socket.io'

const Session = props => {
  let connection = new RTCMulticonnection()
  connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/'
  connection.socketMessageEvent = 'call-by-username'
  connection.autoCloseEntireSession = true

  connection.session = {
    audio: true,
    video: true,
    broadcast: true
  }

  connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
  }

  //   connection.videosContainer =

  connection.onstream = event => {

  }
  return (<Fragment>{}</Fragment >)
}

export default Session
