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
               <h1 className='cardbox-header'>{message}</h1>
               {allIdeas}
          </section>
     )
}

//  <Card idea={idea.activity} type={idea.type} key={idea.key}/>

export default CardBox;