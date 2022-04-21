import React, {Component} from 'react'
import './Form.css'
import {getData, getDataByType} from '../../apiCalls'
import { Link } from "react-router-dom";


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
                    <h1>Choose your challenge!</h1>
                    <select name='catagory' onChange={event => this.updateState(event)} required>
                         <option value=''>Choose a category</option>
                         <option value='education'>Education</option>
                         <option value='social'>Social</option>
                         <option value='music'>Music</option>
                         <option value='recreational'>Recreational</option>
                         <option value='charity'>Charity</option>
                         <option value='cooking'>Cooking</option>
                         <option value='busywork'>Busy Work</option>
                         <option value='all'>All</option>
                    </select>
                    <Link to={'/activityCard'}>
                         <button className='submit'onClick={event => this.getRandomActivity(event)}>Submit</button>
                    </Link>
                   
               </form>
          )
     }

}

export default Form;