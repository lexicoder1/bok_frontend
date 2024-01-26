import "./App.css";
import Header from "./Components/Header";

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Stake from "./Pages/Stake";
import { Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <>

  
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route exact path="/Stake" element={<Stake/>} />
      </Routes>
   <Footer></Footer>
  
   
   
    </>
  );
}

export default App;
