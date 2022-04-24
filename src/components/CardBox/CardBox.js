import Card from '../Card/Card'
import './CardBox.css'

const CardBox = ({ideas, removeIdea, completeIdea, type, message}) => {
     const allIdeas = ideas.map(idea => 
     <Card 
          key={idea.key}
          activity={idea.activity}
          type={idea.type}
          removeIdea={removeIdea}
          completeIdea={completeIdea}
          style={type}
     />
    )
     return(
          <section className='cardbox-section'>
               <div className='cardbox-header'>
               <h1>{message}</h1>
               </div>
               <div className='card-housing'>
               {allIdeas}
               </div>
          </section>
     )
}

export default CardBox;