
const PrimaryCard = ({idea}) => {

     return(
          <div>
               <h2>{idea.activity}</h2>
               <p>Participants:{idea.participants}</p>
               <p>type: {idea.type}</p>
               {/* <link href={idea.link}>{idea.link}</link> */}
               <div>
                    <button>Except Challange</button>
                    <button>Find Another Challange</button>
               </div>
          </div>
     )
}

export default PrimaryCard;