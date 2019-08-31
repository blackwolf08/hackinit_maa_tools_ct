import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import axios from 'axios'

import 'react-chat-widget/lib/styles.css';

class Chat extends Component {
  componentDidMount() {
    addResponseMessage("How do you feel right now?");
  }

  handleNewUserMessage = newMessage => {
    if(newMessage == "done"){
      addResponseMessage("Thank you! have a good day!")
    }
    else{
    axios.post(
      "https://cors-anywhere.herokuapp.com/https://us-central1-hypnos-backend-a41f5.cloudfunctions.net/chatReply",
      {
        msg: newMessage
    }).then(res=>{
      if(res.data == "batri"){
        addResponseMessage("Please wait while I connect you to a Doctor...")
        setTimeout(()=>{
          addResponseMessage("Your appointment is booked!")
          addResponseMessage("Date: 01-09-2019, Venue: Fortis, Noida with Dr. Singh at 3:00 pm, please be on time!")
          addResponseMessage("If confirm? type done")
        }, 2000)
      }
      else {
        addResponseMessage(res.data);
      }
    })
  }
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