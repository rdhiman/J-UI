import React, { Component } from 'react';
import './Chatbot.scss';

class Chatbot extends Component {
    render() {
        return (
            <div className="conversation-pane">
                <span className="message">
                    Hello Ray
                </span>
                <span className="message ">
                    What type of doctor are you looking for?
                </span>
            </div>
        );
    }
}

export default Chatbot;
