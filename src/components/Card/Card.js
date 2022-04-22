import { Link } from "react-router-dom";

const Card = ({ activity, type, removeIdea, completeIdea}) => {
     return(
          <div className='card'>
               <h2>{activity}</h2>
               <p>{type}</p>
               <div>
                    <button onClick={() => removeIdea({activity})}>Delete</button>
                    <button onClick={() => completeIdea({activity})}>Complete</button>
           
               </div>
          </div>
     )

}

export default Card;