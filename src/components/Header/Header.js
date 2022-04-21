import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {


     return(
          <section className='header'>
               <h1 className='logo'>logo</h1>
               <div className='links'>
                 <Link to='/'>
                    <button>Accepted Challenges</button>
                 </Link> 
                    <Link to='/'>
                    <button>Completed Challenges</button>
                 </Link>   
               </div>
          </section>
     )
}


export default Header