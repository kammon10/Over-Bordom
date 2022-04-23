import React, {Component} from 'react'
import './Form.css'
import { Link } from "react-router-dom";
import PrimaryCard from '../PrimaryCard/PrimaryCard'

class Form extends Component {
     constructor() {
          super()
          this.state = {
               type: '',
          }
     }
     
     updateState = (event) => {
          this.setState({type: event.target.value})
     }

     getRandomActivity = (event) => {
          event.preventDefault()
               const newIdea = this.state
               this.state.type && this.props.getNewIdea(newIdea) 
               this.setState({type: ''})
     }


     
     render() {

          return(
               <form className='form'>
                    <h1>Choose your catagory!</h1>
                    <select className='catagory' name='catagory' onChange={event => this.updateState(event)} required>
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
                    <Link to='/activityCard'>
                         <button className='submit'onClick={event => this.getRandomActivity(event)}>Submit</button>
                    </Link>
                   
               </form>
          )
     }

}

export default Form;