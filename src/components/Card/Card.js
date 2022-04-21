import { Link } from "react-router-dom";

const Card = ({idea, addIdea, removeIdea}) => {

     return(
          <div className='card'>
               <h2>{idea.activity}</h2>
               <p>type: {idea.type}</p>
               <div>
                    <button onClick={() => removeIdea({idea})}>Delete</button>
               <Link to='/'>
                    <button onClick={() => addIdea({idea})}>Complete</button>
               </Link>
               </div>
          </div>
     )

}

export default Card;