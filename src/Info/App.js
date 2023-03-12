import React, { Component } from 'react'
import InfoForm from './InfoForm.js'
import InfoTable from './InfoTable'

export class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
  render() {
    return (
      <div className='container'>
        <div className="row">
            <div className="col-6">
            <center><h1>Form</h1></center>
            <InfoForm/>
            </div>
            <div className="col-6">
                <center><h1>Table</h1></center>
                <InfoTable></InfoTable>
            </div>
        </div>
      </div>
    )
  }
}

export default App


