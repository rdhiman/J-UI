import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Chatbot from '../components/Chatbot/Chatbot';

import doctorLogo from '../assets/dr2.svg';
import prescriptionsLogo from '../assets/pills.svg';
import billLogo from '../assets/bills.svg';
import familyMemberLogo from '../assets/family.svg';
import askUsLogo from '../assets/other.svg';

class Landing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showChatBot: false,
            headerText: ''
        }
    }

    toggleChatBot = (headerText) => {
        console.log(headerText);
        this.setState( { showChatBot: !this.state.showChatBot, headerText: headerText } );
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="main-content">
                    <div className="main-content-left">
                        <div className="helpful-links">
                            <h2>Welcome, Ray! How can we help you?</h2>
                            <div className="card" onClick={ () => { this.toggleChatBot('Find a Doctor') }}>
                                <span>
                                    <img src={doctorLogo} alt="" />
                                </span>
                                <span>
                                    <h3>Find a doctor</h3>
                                    <p>JOANY can help you find a doctor that is covered under your plan</p>
                                </span>
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                            <div className="card" onClick={ () => { this.toggleChatBot('Prescriptions') } }>
                                <span>
                                    <img src={prescriptionsLogo} alt="" />
                                </span>
                                <span>
                                    <h3>Prescriptions</h3>
                                    <p>Need to find a plan that covers your meds? We can also fetch pricing of meds on any health plan</p>
                                </span>
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                            <div className="card" onClick={ () => { this.toggleChatBot('Help with a bill') } }>
                                <span>
                                    <img src={billLogo} alt="" />
                                </span>
                                <span>
                                    <h3>Help with a bill</h3>
                                    <p>If you have questions about a surprise bill or want to contest it,</p>
                                </span>
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                            <div className="card" onClick={ () => { this.toggleChatBot('Add a family member') } }>
                                <span>
                                    <img src={familyMemberLogo} alt="" />
                                </span>
                                <span>
                                    <h3>Find a doctor</h3>
                                    <p>JOANY can help you find a doctor that is covered under your plan</p>
                                </span>
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                            <div className="card" onClick={ () => { this.toggleChatBot('Ask us anything') } }>
                                <span>
                                    <img src={askUsLogo} alt="" />
                                </span>
                                <span>
                                    <h3>Find a doctor</h3>
                                    <p>JOANY can help you find a doctor that is covered under your plan</p>
                                </span>
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="main-content-right">
                        {
                            !this.state.showChatBot && (
                                <div className="main-content-right-info-wrapper">
                                    <p>We're here to help <span> 🙏</span></p>
                                    <p>Quickly get help with any of the services on the</p>
                                    <p>left-hand side</p>
                                </div>
                            )
                        }
                        {
                            this.state.showChatBot && (
                                <div className="main-content-right-chatbot-wrapper">
                                    <header>
                                        <span onClick={ this.toggleChatBot }>
                                            <i className="fa fa-angle-left"></i>
                                             Back
                                        </span>
                                        <h3>
                                            {this.state.headerText}
                                        </h3>
                                    </header>
                                    <Chatbot />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
