import React, { Component } from 'react'
import Lifecyclea from './components/Lifecyclea'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
// import PureCom from './components/PureCom'
import ParentCom from './components/ParentCom'


class App extends Component {
  render() {
    return (
      <div>
          <h1>Welcome</h1>
          {/* <Lifecyclea /> */}
          {/* <FragmentDemo /> */}
          {/* <Table /> */}
          <ParentCom />
      </div>
    )
  }
}

export default App

