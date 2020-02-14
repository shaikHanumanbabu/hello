import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             message : 'Welcome Visitor',
             count : 1
        }
        this.callIncrement = this.callIncrement.bind(this)
        this.changeMessage = this.changeMessage.bind(this)
    }
    changeMessage() {

        console.log('Function Calling state');
        console.log(this);
        console.log(this.state.count);
        
        this.setState({
            message : 'thank you ',
            count : this.state.count +1
        }, ()=>{
            console.log('Call back state');
            console.log(this.state.count);
            
        })
    }

    callIncrement() {
        changeMessage();
        changeMessage();
        changeMessage();
        changeMessage();
        changeMessage();
    }
    render() {
        return (
            <div>
                    <h3>And your count is {this.state.count}</h3>
                    <h5>{this.state.message}</h5>
                    <button onClick={this.callIncrement}>Click Me</button>
            </div>
        )
    }
}

export default Message
