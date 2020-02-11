import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Welcome Visitor'
        }
    }
    changeMessage() {
        this.setState({
            message : 'thank you '
        }, ()=>{
            console.log('You clicked Button');
            
        })
    }
    render() {
        return (
            <div>
                    <h5>{this.state.message}</h5>
                    <button onClick={()=>{this.changeMessage()}}>Click Me</button>
            </div>
        )
    }
}

export default Message
