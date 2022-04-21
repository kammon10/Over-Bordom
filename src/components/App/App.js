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

     addIdea = (idea) => {
          this.setState({primaryIdea: idea})
     }

     acceptChallenge = (idea) => {
          this.setState({acceptedChallenges: [...this.acceptedChallenged, idea]})
     }
//////work with this idea tomorrow//////
     // addIdea = (theState , idea) => {
     //      console.log(this.state)
     //      console.log(idea)
     //      this.setState({[theState]: [...this.state[theState], idea]})
     //      console.log(this.state)
     // }
//////////////////////////////////////////////////
     removeIdea = (id) => {
          const badIdea = this.state.acceptedChallenges.filter(idea => idea.id !== id)
          this.setState({acceptedChallenges: badIdea})
          console.log(this.state.acceptedChallenges)
     }

     render() {
          console.log(this.state)
          return(
               <Switch>
               <main className='app'>  
                    <Header />
                         <Route 
                         exact path='/' 
                         render={() => {
                              return (
                              <Form addIdea={this.addIdea}/>
                              )
                         }}/>
                         <PrimaryCard idea={this.state.primaryIdea} addIdea={this.acceptChallenge}/>
                         <Route exact path='/activityCard' 
                         render={() => <PrimaryCard idea={this.state.primaryIdea} addIdea={this.addIdea}/>
                         }  
                        />
               </main>
               </Switch>  

          )
     }
}

export default App;
