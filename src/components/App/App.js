import React, {Component} from 'react'
import 'App.css'
import Form from '../Form/Form'
import Header from '../Header/Header'

class App extends Component {
     constructor() {
          super()
          this.state = {
               allIdeas: [],
               favorites: [],
               completed: []
          }
     }
     render() {
          return(
               <main>
                    <Header />
                    <Form />
     

               </main>

          )
     }
}

export default App;
