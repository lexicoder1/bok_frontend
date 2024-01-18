import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Audits from "./Pages/Audits";
import Contacts from "./Pages/Contacts";

import Footer from "./Components/Footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route exact path="/Audits" element={<Audits/>} />
      </Routes>
      <Routes>
        <Route exact path="/Contacts" element={<Contacts/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
