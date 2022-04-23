import { Link } from "react-router-dom";
import './Card.css'

const Card = ({activity, type, removeIdea, completeIdea, style}) => 
{
     console.log(style)
     return(
          <div className='card'>
               <h2>{activity}</h2>
               <p>{type}</p>
               <div>
                    { style === 'acceptedChallenges' && <><button className='remove-idea-btn' onClick={() => removeIdea({ activity })}>Delete</button><button className='complete-idea-btn' onClick={() => completeIdea({ activity})}>Complete</button></>}
           
               </div>
          </div>
     )

}

export default Card;