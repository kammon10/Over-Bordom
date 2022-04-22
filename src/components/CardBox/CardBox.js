import Card from '../Card/Card'
import './CardBox.css'

const CardBox = ({ideas, removeIdea, completeIdea}) => {
    
     const allIdeas = ideas.map(idea => 
     <Card 
          key={idea.key}
          activity={idea.activity}
          type={idea.type}
          removeIdea={removeIdea}
          completeIdea={completeIdea}
     />
    )
     

     return(
          <section>
               {allIdeas}
          </section>
     )
}

//  <Card idea={idea.activity} type={idea.type} key={idea.key}/>

export default CardBox;