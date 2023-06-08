import { useContext } from "react"
import "./navigationBar.css"
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Optional from "../optional/Optional.js";




const Navbar = () => {

const {user}=useContext(AuthContext)

 
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo" >Booking</span>
        </Link>
        {(JSON.parse(localStorage.getItem("userInfo"))) ? <Optional/>  :(<div className="navItems">
        
        <Link to="/">
        <button className="navButton">Register</button>
        </Link>
        <Link to="/login" >
        <button className="navButton">Login</button>
        </Link>
      </div>)}
        
      </div>
    </div>
  )
}

export default Navbar