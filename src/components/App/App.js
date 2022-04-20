import React, {Component} from 'react'
import './App.css'
import Form from '../Form/Form'
import Header from '../Header/Header'

class App extends Component {
     constructor() {
          super()
          this.state = {
               allIdeas: [],
               primaryIdea: '',
               favorites: [],
               completed: []
          }
     }

     componentDidMount() {
         
     }

     addIdea = (idea) => {
          this.setState({allIdeas: [...this.state.allIdeas, idea]})
          this.setState({primaryIdea: idea})
     }

     render() {
          console.log(this.state.allIdeas)
          return(
               <main>
                   <PrimaryCard idea={this.findIdea()}/>
     

               </main>

          )
     }
}

export default App;
