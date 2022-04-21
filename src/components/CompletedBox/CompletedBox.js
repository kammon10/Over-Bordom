import Card from '../Card/Card'
import './CompletedBox.css'

const CompletedBox = (completedIdeas) => {
     const ideaCards = completedIdeas.map(idea => 
     <Card idea={idea}/>
     )

     return(
          <section>
               {ideaCards}
          </section>
     )
}


export default CompletedBox;