import React, {Component} from 'react'
import './Form'

class Form extends Component {
     constructor() {
          super()
          this.state = {
               catagory: ''
          }
     }
     updateState = (event) => {
          this.setState({catagory: event.target.value})
     }
     render() {
          return(
               <form>
                    <select name='catagory' onClick={event => this.updateState(event)}>
                         <option value='education'>Education</option>
                         <option value='relax'>Relax</option>
                         <option value='recreational'>Recreational</option>
                    </select>
                    <button>Submit</button>
               </form>
          )
     }

}

export default Form;