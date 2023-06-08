import axios from "axios";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/searchContext";
import { useEffect } from "react";



export const Login = () => {
    const [username,setName] = useState("");
    const [password, setPassword] = useState("");
   

     const {user,setUser}=useContext(AuthContext)
      
      const navigate = useNavigate()

      const handleClick = async (e) => {
        e.preventDefault();
    
        try {
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
          const res = await axios.post("/auth/login",{username,password},config);
            
         localStorage.setItem("userInfo", JSON.stringify(res));
     
          navigate("/")
        } catch (err) {
         console.log(err)
        }
      };

      
     

      useEffect(()=>{
       
        if((JSON.parse(localStorage.getItem("userInfo")))!=null){
          
            setUser((localStorage.getItem("userInfo")));
        }
      },[username])
    
     
    //  localStorage.removeItem("userInfo")
    
  return (
    
    <div className="login">
    <div className="lContainer">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e)=>setName(e.target.value)}
        className="lInput"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="lInput"
      />
      <button onClick={handleClick} className="lButton">
        Login
      </button>
     
    </div>
  </div>
);
}
