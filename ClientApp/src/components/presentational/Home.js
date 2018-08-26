import React, { Component } from 'react'
import { HubConnectionBuilder, JsonHubProtocol } from '@aspnet/signalr'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';

let connection = new HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();


export class Home extends Component {
    state = {
        messages: []
    }

    navigate(location) {
        this.props.history.push(location)
    }

    componentDidMount() {
        const localUserItem = JSON.parse(localStorage.getItem('user'))
        connection.start().then(() => console.log("connection started!")).catch(err => console.log(err))
        connection.on("ReceiveMessage", (user, message) => {
            const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const encodedMsg = msg;
            const fromThemVar = localUserItem ? localUserItem.email == user ? false : true : true
            let newMessage = { message: encodedMsg, fromThem: fromThemVar, user: user, time: Date.now() }
            this.setState({
                messages: [...this.state.messages, newMessage]
            })
        });
    }

    handleOnKeyDown = (e) => {
        if (e.key == 'Enter' && e.target.value != "") {
            this.sendMessage()
            e.target.value = ""
            e.preventDefault()
        }
    }

    sendMessage = () => {
        const localUserItem = JSON.parse(localStorage.getItem('user'))
        const user = localUserItem ? localUserItem.email : "null user"
        const message = document.getElementById("full-width").value;
        connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    }

    render() {
        return (
            <React.Fragment>
                <div className="messages">
                    {this.state.messages.map((item, i) => {
                        return (
                            <div className={item.fromThem ? "fromThem" : "fromMe"}>
                                <Paper style={{ padding: item.fromThem ? '20px 0 10px 12px' : null }}>
                                    <div className="fromWho">{item.fromThem ? item.user : ""}</div>
                                    <div>{item.message}</div>
                                </Paper>
                            </div>
                        )
                    })}

                </div>
                <form noValidate autoComplete="off" style={{ position: 'absolute', bottom: '0', left: '0', width: '100vw', boxSizing: 'border-box', padding: '15px' }}>
                    <TextField
                        id="full-width"
                        placeholder="Write something..."
                        fullWidth
                        margin="normal"
                        onKeyDown={this.handleOnKeyDown}
                    />
                    <Button variant="extendedFab" aria-label="send" onClick={() => this.sendMessage()}>
                        <Send />
                    </Button>
                </form>
            </React.Fragment>
        )
    }
}

export default Home