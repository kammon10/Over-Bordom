
import './PrimaryCard.css'

const PrimaryCard = ({idea,getNewIdea, acceptChallenge}) => { 
     return(
          <div className='primaryCard'>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               <div>
                    <button onClick={() => acceptChallenge(idea)}>Accept Challenge</button>
                    <button onClick={() => getNewIdea(idea)}>Find Another Challenge</button>

               </div>
          </div>
     )
}

export default PrimaryCard;