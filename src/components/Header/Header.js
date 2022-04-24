import { NavLink, Link, useLocation } from "react-router-dom";
import './Header.css'

const Header = () => {
     const location = useLocation()

     return(
          <section className='header'>
               <NavLink className='logo'to='/'>
                    <h1 className='logo'>Over Bordom</h1>
               </NavLink>
               <div className='home'>
               </div>
               <div className='links'>
                 <Link to='/acceptedChallenges'>
                    <button className='accepted-challenges'>Accepted Ideas</button>
                    </Link> 
                         <Link to='/completedIdeas'>
                         <button className='completed-challenges' >Completed Ideas</button>
                    </Link>   
               </div>
          </section>
     )
}


export default Header