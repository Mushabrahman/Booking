import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../navigationbar/navigationBar.css"

const Optional = () => {
   

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('userInfo');
        navigate("/login")
        
    };
    
  return (
    <><div style={{display:"flex",gap:"10px"}}>{JSON.parse(localStorage.getItem("userInfo")).data.details.username}
    <span ><button onClickCapture={logout} className="navButton">logout</button></span>
    </div>
    </>

  )
}

export default Optional