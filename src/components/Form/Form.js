import React, {Component} from 'react'
import './Form'
import {getData, getDataByType} from '../../apiCalls'


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

     getRandomActivity = (event) => {
          event.preventDefault()
          this.state.catagory === 'all' ? 
           getData()
          .then(data => this.props.addIdea(data)) : 
           getDataByType(this.state.catagory)
          .then(data => this.props.addIdea(data))
          
     }
     render() {
          return(
               <form>
                    <select name='catagory' onChange={event => this.updateState(event)} required>
                         <option value=''>Choose a catagory</option>
                         <option value='education'>Education</option>
                         <option value='social'>Social</option>
                         <option value='music'>Music</option>
                         <option value='recreational'>Recreational</option>
                         <option value='charity'>Charity</option>
                         <option value='cooking'>Cooking</option>
                         <option value='busywork'>Busy Work</option>
                         <option value='all'>All</option>
                    </select>
                    <button onClick={event => this.getRandomActivity(event)}>Submit</button>
               </form>
          )
     }

}

export default Form;