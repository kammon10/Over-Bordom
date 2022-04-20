import React, {Component} from 'react'
import './App.css'
import Form from '../Form/Form'
import Header from '../Header/Header'
import PrimaryCard from '../PrimaryCard/PrimaryCard'
import { Route, Switch } from "react-router-dom";
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
          
          return(
               <main>
               
                    <Header />

                    <Switch>
                         <Route exact path="/" component={ Form }/>

                         
                    </Switch>
                    

               </main>

          )
     }
}

export default App;
