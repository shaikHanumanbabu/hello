import React, { Component } from 'react'
import Lifecycleb from './Lifecycleb';

class Lifecyclea extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name :"hanuman"
        }
        console.log('LifeCycleA constructor');
        
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
        
    }
    shouldComponentUpdate() {
        console.log('LifeCycleA  shouldComponentUpdate()');
        return true
        
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA  getSnapshotBeforeUpdate()');
        // console.log();
        return null

        
    }
    componentDidUpdate() {
        console.log('LifeCycleA  componentDidUpdate()');

    }
    handlerClick = () => {
        this.setState({
            name : "DevRabbit"
        })
    }
    render() {
        console.log('LifeCycleArender()');
        
        return (
            <div>
                <h2>Life Cycle --------- A</h2>
                <button onClick={this.handlerClick}>Click Me</button>
                <Lifecycleb />
            </div>
        )
    }
}

export default Lifecyclea
