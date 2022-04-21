import { Link } from "react-router-dom";
import './PrimaryCard.css'

const PrimaryCard = ({idea}) => {
 
     
     return(
          <div id={idea.id} className='primaryCard'>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               <div>
               <Link to='/challengeExcepted'>
                    <button onClick={event => this.props.acceptChallenge(event)}>Except Challenge</button>
               </Link>
               <Link to='/'>
                    <button>Find Another Challange</button>
               </Link>
               </div>
          </div>
     )
}

export default PrimaryCard;