import { Link } from "react-router-dom";
import './App1.css'
import logo from '../src/image/logo.JPG'

function Navbar(){
    return(

        <div className='cba'>
        <div>
        <img src={logo} />

        </div>

        <div>
        <Link className="abc" to="/">Home </Link>
        <Link className="abc" to="/menu">menu </Link>
        <Link className="abc" to="/contact">contact </Link>

        </div>
        </div>
        
        
    );
}
export default Navbar;