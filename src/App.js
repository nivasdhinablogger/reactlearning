import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isShown:true
    }
  }

  myClick=()=>{
    this.setState({
      isShown:!this.state.isShown
    })
  }


  render() {
    if(this.state.isShown){
      return(
      <>
        <h1>Hi this is conditional redering</h1>
        <button onClick={this.myClick}>Click Me</button>
      </>
        )
    }
    else{
      return(
      <>
        <h1>blanked</h1>
        <button onClick={this.myClick}>Click Me</button>
      </>)
    }
  }
}

export default App