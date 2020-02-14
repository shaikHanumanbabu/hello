import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
                let message;
                    if (this.state.isLoggedIn) {
                        message = <span>Hanuman</span>
                    } else {
                        message = <span>Guest</span>
                        
                    }
        return (
            <div>
                <h1>welcome, {message}</h1>
            </div>
        )
    }
}

export default UserGreet
