import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate as navigate} from 'react-router-dom';
import "./register.css"

export const Register = () => {
    const [username,setName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
          const res = await axios.post("https://mernbackened2.onrender.com/api/auth/register",{username,password,email,phone,city},config);
            
         localStorage.setItem("userInfo", JSON.stringify(res));
     
          navigate("/")
        } catch (err) {
         console.log(err)
        }
      };

  return (
    <div className="register">
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
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="lInput"
      />
      <input
        type="city"
        placeholder="city"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        className="lInput"
      />
      <input
        type="phone"
        placeholder="phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className="lInput"
      />
      <button onClick={handleClick} className="lButton">
        Register
      </button>
     
    </div>
  </div>
  )
}

