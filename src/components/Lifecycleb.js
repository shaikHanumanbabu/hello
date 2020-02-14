import React, { Component } from 'react'

class Lifecycleb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name :"hanuman"
        }
        console.log('LifeCycleB constructor');
        
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleB componentDidMount');
        
    }
    shouldComponentUpdate() {
        console.log('LifeCycleB  shouldComponentUpdate()');
        return true
        
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB  getSnapshotBeforeUpdate()');
        // console.log();
        return null
        
    }
    componentDidUpdate() {
        console.log('LifeCycleB  componentDidUpdate()');

    }
    render() {
        console.log('LifeCycleB render()');
        
        return (
            <div>
                <h2>Life Cycle --------- B</h2>
            </div>
        )
    }
}

export default Lifecycleb
