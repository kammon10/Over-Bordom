import React, {Component} from 'react'
import './App.css'
import { Route, Switch } from "react-router-dom";
import Form from '../Form/Form'
import Header from '../Header/Header'
import PrimaryCard from '../PrimaryCard/PrimaryCard'
class App extends Component {
     constructor() {
          super()
          this.state = {
               allIdeas: [],
               primaryIdea: '',
               challangeAccepted: [],
               completed: []
          }
     }

     componentDidMount() {
         
     }

     addIdea = (idea) => {
          console.log(idea)
          this.setState({allIdeas: [...this.state.allIdeas, idea]})
          this.setState({primaryIdea: idea})
     }

     acceptChallenge = (idea) => {
          this.setState({challangeAccepted: [...this.state.challangeAccepted, idea]})
     }

     render() {
          
          return(
               <main className='app'>  
                    <Header />
                    
                    <Switch>
                         <Route 
                         path='/' 
                         render={() => {
                              return <Form addIdea={this.addIdea}/>
                              
                         }}/>
                         <Route path='/activityCard' 
                         render={() => <PrimaryCard idea={this.state.primaryIdea} addIdea={this.acceptChallenge}/>
                         }  
                        />
                    </Switch>  
                    
               </main>

          )
     }
}

export default App;
