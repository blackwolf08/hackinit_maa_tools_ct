import React, { Component } from 'react'
import gif from './gif2.gif'
import ecg from './ecg.gif'
import bt from './Bluetooth.svg.png'
import Chat from '../../components/Chat/Chat'


export default class Fitness extends Component {
    render() {
        return (
            <div>
                <h2>Setup your device!</h2>
                <img className="fitness-gif" src={gif} />
                <br />
                <p>Here at MAA we are commited towards your security.</p>
                <div className="df">
                    <img src={ecg} className="fitness-gif-2" />
                    
                </div>
                <p style={{textAlign: "center"}}>Track any ir-regular pluse with your device and get your loved ones notified in any emergency circumstances.</p>
                <img src={bt} className="fitness-gif bt" />
                <ul style={{marginTop: "30px"}}>
                    <li>Real time health stats.</li>
                    <li>Fall detection and alert.</li>
                    <li>Get your data on cloud.</li>
                </ul>
                <Chat />
            </div>
        )
    }
}
