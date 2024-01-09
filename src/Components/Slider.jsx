import "../App.css";
import { HashLink as Link } from "react-router-hash-link";
import img from "../assets/lexilaablogo.png";
import { tog } from "../State/context";

import { IoIosClose } from "react-icons/io";
import { useContext } from "react";
function Slider() {
  const { toggle, hideToggle } = useContext(tog);
  console.log(toggle, "sss");
  return (
    <>
      <div className={`slider-container ${toggle}`}>
      <div className="slider-logo">
          <img src={img} alt="" className="left-img" />
        </div>
        <IoIosClose onClick={hideToggle} className="close-icon" />
        <Link to="/" smooth className="slider-links" onClick={hideToggle}>
          Home
        </Link>

        <Link to="" smooth className="slider-links" onClick={hideToggle}>
          Web3
        </Link>

        <Link to="" smooth className="slider-links" onClick={hideToggle}>
          Software
        </Link>

        <Link to="/Audits" smooth className="slider-links" onClick={hideToggle}>
          Audits
        </Link>

        <Link to="" smooth className="slider-links" onClick={hideToggle}>
          Products
        </Link>

        <Link to="" smooth className="slider-links" onClick={hideToggle}>
          Trainings
        </Link>
        <Link to="" smooth className="slider-links" onClick={hideToggle}>
          Portfolio
        </Link>
      </div>
    </>
  );
}

export default Slider;
