import "../App.css";
import Audits from '../Components/Audits'
import Slider from "../Components/Slider"
import { Route, Routes } from "react-router-dom";


function Header() {
   

  return (
    <>
     <Slider/>
      <Audits></Audits>
    </>
  );
}

export default Header;
