import { NavLink, Link } from "react-router-dom";
import './Header.css'

const Header = () => {

     return (
          <section className='header'>
               <NavLink className='logo-nav' to='/Over-Boredom'>
                    <h1 className='logo'>Over Boredom</h1>
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