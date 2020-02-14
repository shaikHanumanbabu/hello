import React, { Component } from 'react'
import {Greet} from './components/Sample';
import {Hello} from './components/Hello';
import Welcome from './components/Welcome'
// import Message from './components/Message'
import Counter from './components/Counter'
import Functionalcomponent from './components/Functionalcomponent'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreet from './components/UserGreet';
import Stylesheet from './components/Stylesheet';

class App extends Component {
  render() {
    return (
      <div>
          <h1>Welcome</h1>
          <Stylesheet check ={true}/>
          {/* <NameList /> */}
          {/* <StyleSheet /> */}
          {/* <Greet  name="hanuman"/> */}
          {/* <Hello  name="hanuman"/> */}
          {/* <Message  name="hanuman"/> */}
          {/* <Welcome  name="hanuman"/> */}
          {/* <Counter /> */}
          {/* <Functionalcomponent /> */}
          {/* <EventBind /> */}
          {/* <ParentComponent /> */}
          {/* <UserGreet /> */}
      </div>
    )
  }
}

export default App

