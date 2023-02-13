import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Section1 from "./Components/Section1";
// import Section2 from "./Components/Section2";
// import Section3 from "./Components/Section3";
// import Section4 from "./Components/Section4";
// import FormCard from "./Components/FormCard";
// import Gather from "./Components/Gather";
// import Navbar from "./Components/Navbar";

import Becomeaseller from "./Components/Becomeaseller";
import First from "./Components/First";
import Signup from "./Components/Signup";
import Startselling from "./Components/Startselling";
function App() {
  return (
    <>
   
     
      <BrowserRouter>
    
        <Routes>
         
          <Route exact path="/" element={<First />} />
          <Route exact path="/becomeaseller" element={<Becomeaseller/>} />


          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/startselling" element={<Startselling/>}/>
          <Route exact path = "/becomeseller" element={ <Becomeaseller/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
