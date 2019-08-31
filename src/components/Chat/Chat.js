import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import axios from 'axios'

import 'react-chat-widget/lib/styles.css';

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("How do you feel right now?");
  }

  handleNewUserMessage = newMessage => {
    axios.post(
      "https://cors-anywhere.herokuapp.com/https://us-central1-hypnos-backend-a41f5.cloudfunctions.net/chatReply",
      {
        msg: newMessage
    }).then(res=>{
      addResponseMessage(res.data)
    })
  }

  render() {
    return (
      <div className="chat">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          subtitle="How do you feel?"
          title="Let me help!"
        />
      </div>
    );
  } 
}

export default Chat;