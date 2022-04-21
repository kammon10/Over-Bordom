import Card from '../Card/Card'
import './CardBox.css'

const CardBox = (ideas) => {
     const allIdeas = ideas.map(idea => 
     <Card idea={idea}/>
     )

     return(
          <section>
               {allIdeas}
          </section>
     )
}


export default CardBox;