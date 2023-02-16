import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Accupressure from "./Components/Accupressure";
// import Section1 from "./Components/Section1";
// import Section2 from "./Components/Section2";
// import Section3 from "./Components/Section3";
// import Section4 from "./Components/Section4";
// import FormCard from "./Components/FormCard";
// import Gather from "./Components/Gather";
// import Navbar from "./Components/Navbar";

import Becomeaseller from "./Components/Becomeaseller";
import Click from "./Components/Click";
import First from "./Components/First";
import NewArival from "./Components/NewArival";
import Price from "./Components/Price";
// import Form2 from "./Components/Form2";
import Relevence from "./Components/Relevence";
import Signup from "./Components/Signup";
import Startselling from "./Components/Startselling";
function App() {
  return (
    <>
   
     
      <BrowserRouter>
    
        <Routes>
         
          <Route exact path="/" element={<First />} />
          <Route exact path="/becomeaseller" element={<Becomeaseller/>} />
          <Route exact path="/relevence" element={<Relevence/>}/>
          <Route exact path="/newarrival" element = {<NewArival/>}/>
          <Route exact path="/accupressure" element ={<Accupressure/>}/>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/startselling" element={<Startselling/>}/>
          <Route exact path = "/becomeseller" element={ <Becomeaseller/>}/>
          <Route exact path='/price' element={<Price/>}/>
          <Route exact path="/click/1" element={<Click/>}/>
        </Routes>
       
      
        
       
      </BrowserRouter>
    </>
  );
}
export default App;
