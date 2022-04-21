import { Link, useLocation } from "react-router-dom";
import './Header.css'

const Header = () => {
     const location = useLocation()

     return(
          <section className='header'>
               <Link to='/'>
                    <h1 className='logo'>logo</h1>
               </Link>
               <div className='home'>
               </div>
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