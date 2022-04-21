import { Link } from "react-router-dom";
import './PrimaryCard.css'

const PrimaryCard = ({idea, addIdea,}) => {
 
     
     return(
          <div id={idea.id} className='primaryCard'>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               <div>
                    <button onClick={() => addIdea(idea)}>Except Challenge</button>
               <Link to='/'>
                    <button>Find Another Challange</button>
               </Link>
               </div>
          </div>
     )
}

export default PrimaryCard;