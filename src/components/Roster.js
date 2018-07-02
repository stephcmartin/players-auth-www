import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import requireAuth from './requireAuth'

import './Roster.css'

class Roster extends Component{
    render(){
        return(
            <div className="container">
                <div className="roster">
                <div className="rosterHeader">
                    <h2>Your roster of players:</h2>
                </div>
                <div className="stats">
                <h4>Ma Long</h4>
                <p>Rating: 9000</p>
                <p>Handedness: right</p>
                <Button onClick={()=>{alert('This player will be deleted')}}>Delete</Button>
                </div>
            </div>
            <div className="createPlayer">
            <Button onClick={()=>{alert('Create new player')}}>Add new player</Button>
            </div>
        </div>
        )
    }
}

export default requireAuth(Roster);