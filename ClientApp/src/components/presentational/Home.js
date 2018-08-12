import React, { Component } from 'react'
import UserCard from './UserCard';

export class Home extends Component {
    navigate(location) {
        console.log(location)
        //this.props.history.push(location)
    }

    render() {
        return (
            <div>
                <UserCard />
            </div>
        )
    }
}

export default Home