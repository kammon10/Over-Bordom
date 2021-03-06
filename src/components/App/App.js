import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from "react-router-dom";
import Form from '../Form/Form'
import Header from '../Header/Header'
import PrimaryCard from '../PrimaryCard/PrimaryCard'
import { getData, getDataByType } from '../../apiCalls'
import CardBox from '../CardBox/CardBox'

class App extends Component {
     constructor() {
          super()
          this.state = {
               isTrue: false,
               allIdeas: [],
               primaryIdea: '',
               acceptedChallenges: [],
               completed: []
          }
     }

     componentDidMount() {

     }

     getNewIdea = (newIdea) => {
          newIdea.type === 'all' ?
               getData()
                    .then(data => this.addIdea(data)) :
               getDataByType(newIdea.type)
                    .then(data => this.addIdea(data))
     }

     addIdea = (idea) => {
          this.setState({ primaryIdea: idea })
     }

     acceptChallenge = (idea) => {
          this.setState({ acceptedChallenges: [...this.state.acceptedChallenges, idea] })
     }

     removeIdea = (activity) => {
          const keptIdeas = this.state.acceptedChallenges.filter(idea => idea.activity !== activity.activity)
          this.setState({ acceptedChallenges: keptIdeas })
     }
     completeIdea = (activity) => {
          const completedChallenge = this.state.acceptedChallenges.filter(challenge => challenge.activity === activity.activity)
          this.setState({ completed: [...this.state.completed, completedChallenge[0]] })
          const updatedList = this.state.acceptedChallenges.filter(challenge => challenge.activity !== activity.activity)
          this.setState({ acceptedChallenges: updatedList })
     }

     render() {
          return (
               <Switch>
                    <main className='app'>
                         <Header />
                         <Route
                              exact path='/Over-Boredom'
                              render={() => <Form getNewIdea={this.getNewIdea} />
                              } />
                         {this.state.primaryIdea && <Route exact path='/Over-Boredom'
                              render={() => <PrimaryCard idea={this.state.primaryIdea} addIdea={this.addIdea} acceptChallenge={this.acceptChallenge} getNewIdea={this.getNewIdea} isTrue={'true'} />
                              }
                         />}
                         <Route
                              exact path='/completedIdeas'
                              render={() => <CardBox ideas={this.state.completed} type='completedChallenges' message={'your Completed Challenges'} />}
                         />
                         <Route
                              exact path='/acceptedChallenges'
                              render={() => <CardBox ideas={this.state.acceptedChallenges} removeIdea={this.removeIdea} completeIdea={this.completeIdea} type={'acceptedChallenges'} message={'your Accepted Challenges'} />}
                         />
                    </main>
               </Switch>

          )
     }
}

export default App;
