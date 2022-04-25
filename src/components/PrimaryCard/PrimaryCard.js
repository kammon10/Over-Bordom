import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './PrimaryCard.css'

const PrimaryCard = ({ idea, getNewIdea, acceptChallenge, isTrue }) => {
     const [accept, setAccept] = useState(false)
     const [addType, setAddType] = useState('')

     const addChallenge = () => {
          acceptChallenge(idea)
          setAccept(true)
     }

     const newChallenge = () => {
          setAccept(false)
          getNewIdea(idea)


     }

     return (
          <div className='primaryCard'>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               <div>
                    {!accept && <button className='addChallenge' onClick={() => addChallenge()}>Accept Challenge</button>}

                    <button className='newChallenge' onClick={() => newChallenge()}>Find Another Challenge</button>

               </div>
          </div>
     )
}

export default PrimaryCard;

PrimaryCard.propTypes = {
     idea: PropTypes.object,
     getNewIdea: PropTypes.func,
     acceptChallenge: PropTypes.func,
     isTrue: PropTypes.bool
}