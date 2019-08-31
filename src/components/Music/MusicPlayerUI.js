import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
import axios from 'axios'
import { Spin, Button } from 'antd';

 

export default class MusicPlayerUI extends Component {

  state = {
    playlist: [],
    loading: true,
     landing : true,
     status : "0.2"
  }


  componentDidMount(){
    axios.post('https://cors-anywhere.herokuapp.com/https://us-central1-hypnos-backend-a41f5.cloudfunctions.net/sendPlaylist', {
      value : this.state.status
    }).then(res=>{
      console.log(res.data.data)
      this.setState({
        playlist : res.data.data,
      })
      this.setState({
        loading: false
      })
    })
    
    
  }

  changeSong = (val)=>{
    this.setState({
      loading: true
    })
    axios.post('https://cors-anywhere.herokuapp.com/https://us-central1-hypnos-backend-a41f5.cloudfunctions.net/sendPlaylist', {
      value : val
    }).then(res=>{
      console.log(res.data.data)
      this.setState({
        playlist : res.data.data,
      })
      this.setState({
        loading: false,
        landing: false
      })
    })
  }


  render() {


    if(this.state.loading){
      return <Spin />
    }

    if(this.state.landing){
      return (
        <div className="overlay">
          <button className="button-overlay" onClick={()=>this.changeSong(0.7)} key="Happy" type="primary">Happy</button>
          <button className="button-overlay" onClick={()=>this.changeSong(0.2)} type="primary" key="Sad">Sad</button>
          <button className="button-overlay" onClick={()=>this.changeSong(0.5)} type="primary" key="Relaxed">Relaxed</button>
        </div>
      )
    }

    return (
      <>
      <div className="meditate"></div>
        <MusicPlayer playlist={this.state.playlist} />
      </>
    );
  }
}




