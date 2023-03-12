import React, {Component} from 'react'

export class InfoForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
        <form>
            <div className='form-group'>
                <label>First name:</label>
                <input type="text" name="Name"></input>
            </div>
            <div className='form-group'>
                <label>Age:</label>
                <input type="text" name="Age"></input>
            </div>
            <div className='form-group'>
                <label>City:</label>
                <input type="text" name="City"></input>
            </div> 
            <div className='form-group'>
                <button>Submit</button>
            </div> 

        </form>
    )
  }
}

export default InfoForm