import Card from '../Card/Card'
import './CardBox.css'

const CardBox = ({ideas}) => {
    
     const allIdeas = ideas.map(idea => 
    console.log(idea.activity)
    )
     

     return(
          <section>
               {allIdeas}
          </section>
     )
}

//  <Card idea={idea.activity} type={idea.type} key={idea.key}/>

export default CardBox;