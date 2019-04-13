import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import uws from "uws";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// var express = require("express");
// var handler = express();

// // var server = require("http").Server(app);
// // var io = require("socket.io")(server);
// var io = require("socket.io");
// // app.use(express.static("server/public"));
// var app = require("http").createServer(handler);
// var io = require("socket.io")(app);
// var fs = require("fs");

// app.listen(80);

// const port = 8000;

// io.listen(port);

// io.on("connection", function(socket) {
//   socket.on("video", function(blob) {
//     socket.broadcast.volatile.emit("video", blob);
//   });

//   socket.on("audio", function(blob) {
//     socket.broadcast.volatile.emit("audio", blob);
//   });
// });

// server.listen(process.env.PORT || 3001);

// console.log("Server running on http://localhost:3001/");
