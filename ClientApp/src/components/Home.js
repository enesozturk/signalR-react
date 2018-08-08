import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HubConnectionBuilder } from '@aspnet/signalr'

let connection = new HubConnectionBuilder()
  .withUrl("/chatHub")
  .build();

class Home extends Component {
  state = {}

  componentDidMount() {
    connection.start().then(() => console.log("connection started!")).catch(err => console.log(err))
    connection.on("ReceiveMessage", (user, message) => {
      const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const encodedMsg = user + " says " + msg;
      const li = document.createElement("li");
      li.textContent = encodedMsg;
      document.getElementById("messagesList").appendChild(li);
      console.log(user + ": " + message);
    });
  }

  sendMessage = (e) => {
    const user = document.getElementById("userInput").value;
    const message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="col-6">&nbsp;</div>
          <div className="col-6">
            User..........<input type="text" id="userInput" />
            <br />
            Message...<input type="text" id="messageInput" />
            <input type="button" id="sendButton" onClick={this.sendMessage} value="Send Message" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-6">&nbsp;</div>
          <div className="col-6">
            <ul id="messagesList"></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;