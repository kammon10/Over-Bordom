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
               acceptedChallenges: [],
               completed: []
          }
     }

     componentDidMount() {
         
     }

     
//////work with this idea tomorrow//////
     addIdea = (theState, idea) => {
          this.setState({[theState]: [...this.setState[theState], idea]})
          console.log(this.state)
     }
//////////////////////////////////////////////////
     removeIdea = (id) => {
          const badIdea = this.state.acceptedChallenges.filter(idea => idea.id !== id)
          this.setState({acceptedChallenges: badIdea})
          console.log(this.state.acceptedChallenges)
     }

     render() {
          
          return(
               <main className='app'>  
                    <Header />
                    <PrimaryCard idea={this.state.primaryIdea} addIdea={this.acceptChallenge}/>
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
