import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ activity, type, removeIdea, completeIdea, style }) => {
     return (
          <div className='card'>
               <h2>{activity}</h2>
               <p>{type}</p>
               <div>
                    {style === 'acceptedChallenges' && <><button className='remove-idea-btn' onClick={() => removeIdea({ activity })}>Delete</button><button className='complete-idea-btn' onClick={() => completeIdea({ activity })}>Complete</button></>}
               </div>
          </div>
     )

}

export default Card;

Card.propTypes = {
   activity: PropTypes.string,
   type: PropTypes.string,
   removeIdea: PropTypes.func,
   completeIdea: PropTypes.func,  
   style: PropTypes.string 
}