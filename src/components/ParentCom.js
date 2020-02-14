import React, { Component } from 'react'
import RegCom from './RegCom';
import PureCom from './PureCom';

class ParentCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name :"dev"
        }
    }
    /*componentDidMount() {
        setInterval(() => {
            this.setState({
                name : "dev"
            })
        }, 2000);
    }*/
    render() {
        console.log('Parent componet');
        
        return (
            <div>
                parentcomponent
                <RegCom  name={this.state.name}/>
                <PureCom name={this.state.name} />
            </div>
        )
    }
}

export default ParentCom
