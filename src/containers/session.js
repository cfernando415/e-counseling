import React, { Fragment, Component } from "react";
import Peer from "simple-peer";
// import Video from "../components/Video";
// import io from "socket.io-client";
// import { UserMedia, VideoRecorder, AudioRecorder } from "usermedia";
// const io = require("socket.io")();
// import openSocket from "socket.io-client";
// const serverURL =
//   window.location.protocol + "//" + window.location.host + ":3001";
// const socket = io("http://localhost:3001/");

// const socket = openSocket(serverURL);

class Session extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.videoRemoteRef = React.createRef();
  }

  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true }, gotMedia, function() {})
      .then(stream => (this.videoRef.current.srcObject = stream));

    function gotMedia(stream) {
      var peer1 = new Peer({ initiator: true, stream: stream });
      var peer2 = new Peer();

      peer1.on("signal", function(data) {
        peer2.signal(data);
      });

      peer2.on("signal", function(data) {
        peer1.signal(data);
      });

      peer2.on("stream", function(stream) {
        // got remote video stream, now let's show it in a video tag
        this.videoRemoteRef.current.srcObject = stream;
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="local">
          <video autoPlay={true} muted={true} ref={this.videoRef} />
        </div>
        <div id="remote">
          <video autoPlay={true} ref={this.videoRemoteRef} />
        </div>
      </React.Fragment>
    );
  }
}

export default Session;
