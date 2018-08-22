import React, { Component } from 'react'
export class Profile extends Component {
    state = {
        email: "",
        password: "",
        messages: []
    }

    navigate(location) {
        this.props.history.push(location)
    }

    render() {
        return (
            <div className="profile">
                <h2>Profile page</h2>
            </div>
        )
    }
}

export default Profile;