import React, {Component} from 'react'
import './App.css'
import { Route, Switch } from "react-router-dom";
import Form from '../Form/Form'
import Header from '../Header/Header'
import PrimaryCard from '../PrimaryCard/PrimaryCard'
import {getData, getDataByType} from '../../apiCalls'
import CardBox from '../CardBox/CardBox'

class App extends Component {
     constructor() {
          super()
          this.state = {
               catagory: '',
               allIdeas: [],
               primaryIdea: '',
               acceptedChallenges: [],
               completed: []
          }
     }

     componentDidMount() {
         
     }

     getNewIdea = (newIdea) => {
          console.log(newIdea)
           newIdea.type === 'all' ? 
           getData()
          .then(data => this.addIdea(data)) : 
           getDataByType(newIdea.type)
          .then(data => this.addIdea(data))
          .then(data => console.log(data))         
     } 

     addIdea = (idea) => {
          console.log(idea)
          this.setState({primaryIdea: idea})
     }

     acceptChallenge = (idea) => {
          this.setState({acceptedChallenges: [...this.state.acceptedChallenges, idea]})
     }

//////work with this idea tomorrow//////
     // addIdea = (theState , idea) => {
     //      console.log(this.state)
     //      console.log(idea)
     //      this.setState({[theState]: [...this.state[theState], idea]})
     //      console.log(this.state)
     // }
//////////////////////////////////////////////////
     removeIdea = (idea) => {
          const badIdea = this.state.acceptedChallenges.filter(thing => thing.key !== idea.key)
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
                              <Form getNewIdea={this.getNewIdea}/>
                              )
                         }}/>
                         <PrimaryCard idea={this.state.primaryIdea} addIdea={this.acceptChallenge} getNewIdea={this.getNewIdea}/>
                         <Route exact path='/activityCard' 
                         render={() => <PrimaryCard idea={this.state.primaryIdea} addIdea={this.addIdea} />
                         }  
                        />
                        <Route
                        exact path='/completedIdeas'
                        render={() => <CardBox ideas={this.state.completed}/>}
                        />
                          <Route
                        exact path='/acceptedChallenges'
                        render={() => <CardBox ideas={this.state.acceptedChallenges}/>}
                        />

                        
               </main>
               </Switch>  

          )
     }
}

export default App;
