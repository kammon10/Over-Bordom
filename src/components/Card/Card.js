

const Card = ({idea, addIdea, removeIdea}) => {

     return(
          <div id={idea.id} className='card'>
               <h2>{idea.activity}</h2>
               <p>type: {idea.type}</p>
               <div>
                    <button onClick={() => removeIdea({idea.id})}>Delete</button>
               <Link to='/'>
                    <button onClick={() => addIdea({'completedIdea', idea})}>Complete</button>
               </Link>
               </div>
          </div>
     )

}

export default Card;