import React, {Component} from 'react'
import './Form'
import {getData} from '../../apiCalls'


class Form extends Component {
     constructor() {
          super()
          this.state = {
               catagory: '',
               idea: ''
          }
     }
     updateState = (event) => {
          this.setState({catagory: event.target.value})
     }

     getRandomActivity = () => {
           getData()
          .then(data => this.setState({idea: data}))
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