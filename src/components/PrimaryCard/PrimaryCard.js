import { Link } from "react-router-dom";
import './PrimaryCard.css'

const PrimaryCard = ({idea, addIdea, getNewIdea}) => {
     console.log(idea)
     
     return(
          <div className='primaryCard'>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               <div>
                    <button onClick={() => addIdea(idea)}>Accept Challenge</button>
                    <button onClick={() => getNewIdea(idea)}>Find Another Challenge</button>

               </div>
          </div>
     )
}

export default PrimaryCard;