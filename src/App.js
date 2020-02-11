import React, { Component } from 'react'
import {Greet} from './components/Sample';
import {Hello} from './components/Hello';
import Welcome from './components/Welcome'
import Message from './components/Message'
class App extends Component {
  render() {
    return (
      <div>
          <h1>Welcome</h1>
          {/* <Greet  name="hanuman"/> */}
          {/* <Hello  name="hanuman"/> */}
          <Message  name="hanuman"/>
          {/* <Welcome  name="hanuman"/> */}
      </div>
    )
  }
}

export default App

