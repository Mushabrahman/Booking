import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { useState } from "react";
import { SearchContext } from "./context/searchContext";




function App() {


  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [user,setUser] = useState(null);
 
  return (

   
    <SearchContext.Provider value={{dates,setDates,destination,setDestination,options,setOptions}} >
     
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
       
      </Routes>
    </BrowserRouter>  
    </SearchContext.Provider>
    
  );
}

export default App;
