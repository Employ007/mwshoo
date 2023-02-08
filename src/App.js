import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Gather from "./Components/Gather";

import Navbar from "./Components/Navbar";

import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        {/*    
    <Section1/>
<Section2/>
<Section3/>
<Section4/>
<FormCard/> */}

        <Routes>
          <Route path="/" element={<Gather />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
