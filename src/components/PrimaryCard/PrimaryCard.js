import { Link} from "react-router-dom";

const PrimaryCard = ({idea}) => {
     console.log(idea)
     return(
          <div id={idea.id}>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               <div>
               <Link to={`/challengeExcepted`}>
                    <button onClick={event => this.props.addChallange(event)}>Except Challenge</button>
               </Link>
               <Link to={`/`}>
                    <button>Find Another Challange</button>
               </Link>
               </div>
          </div>
     )
}

export default PrimaryCard;