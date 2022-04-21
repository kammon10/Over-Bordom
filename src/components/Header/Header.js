import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {


     return(
          <section className='header'>
               <h1 className='logo'>logo</h1>
               <div className='links'>
                 <Link to='/acceptedChallenges'>
                    <button>Accepted Challenges</button>
                 </Link> 
                    <Link to='/completedIdeas'>
                    <button>Completed Challenges</button>
                 </Link>   
               </div>
          </section>
     )
}


export default Header