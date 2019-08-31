import React, { Component } from 'react'
import Youtube from './Youtube'
import Chat from '../../components/Chat/Chat'

export default class YoutubeCanvas extends Component {
    render() {
        return (
            <div>
                <h2 className="y-h1">Recommended videos</h2>
                <Youtube id="I7h9FklN0GU" />
                <div className="w-100"></div>
                <Youtube id="VktZZEeGdSs" />
                <div className="w-100"></div>
                <Youtube id="oWiR6iRkmbY" />
                <div className="w-100"></div>
                <Youtube id="8sj-qQ3vJy4" />
                <Chat />
            </div>
        )
    }
}
