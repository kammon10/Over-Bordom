import { NavLink, Link, useLocation } from "react-router-dom";
import './Header.css'

const Header = () => {
     const location = useLocation()

     return(
          <section className='header'>
               <NavLink to='/'>
                    <h1 className='logo'>logo</h1>
               </NavLink>
               <div className='home'>
               </div>
               <div className='links'>
                 <Link to='/acceptedChallenges'>
                    <button className='accepted-challenges'>Accepted Challenges</button>
                 </Link> 
                    <Link to='/completedIdeas'>
                    <button className='completed-challenges' >Completed Challenges</button>
                 </Link>   
               </div>
          </section>
     )
}


export default Header