import React, { Component } from 'react';
import requireAuth from './requireAuth'

class Roster extends Component{
    render(){
        return(
            <div>
                <h2>Your roster of players:</h2>
            </div>
        )
    }
}

export default requireAuth(Roster);