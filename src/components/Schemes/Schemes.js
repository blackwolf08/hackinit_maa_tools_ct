import React, { Component } from 'react'
import axios from 'axios'

import { Card } from 'antd';

export default class Schemes extends Component {
    state ={
        data: []
    }
    componentDidMount(){
        axios.post('https://cors-anywhere.herokuapp.com/https://us-central1-hypnos-backend-a41f5.cloudfunctions.net/schemes').then(res=>{
            console.log(res.data.data)
            this.setState({
                data: res.data.data
            })
        })
    }
    render() {
        if(this.state.data.length === 0){
            return <p>Loading...</p>
        }
        return (
            <div>
                {this.state.data.map(entry=>(
                    <Card title={entry.scheme} extra={<a href="#">More</a>} style={{ width: 300, marginBottom: "30px" }}>
                    <p>{entry.desc}</p>
                  </Card>
                ))}
            </div>
        )
    }
}




    
