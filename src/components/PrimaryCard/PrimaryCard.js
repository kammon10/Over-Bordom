import React, {useState} from 'react'
import './PrimaryCard.css'

const PrimaryCard = ({idea,getNewIdea, acceptChallenge, isTrue}) => { 
     const [accept, setAccept] = useState(false)
     const addChallenge = () => {
          acceptChallenge(idea)
          setAccept(true)
     }
     console.log('accept:',accept) 
     const newChallenge = () => {
          setAccept(false)
          getNewIdea(idea)

     }
     return(
          <div className='primaryCard'>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               <div>
                    {!accept && <button onClick={() => addChallenge()}>Accept Challenge</button>}

                    <button onClick={() => newChallenge()}>Find Another Challenge</button>

               </div>
          </div>
     )
}

export default PrimaryCard;