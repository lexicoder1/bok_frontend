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
        <Link to="" smooth className="slider-links">
          Home
        </Link>

        <Link to="" smooth className="slider-links">
          Web3
        </Link>

        <Link to="" smooth className="slider-links">
          Software
        </Link>

        <Link to="" smooth className="slider-links">
          Security
        </Link>

        <Link to="" smooth className="slider-links">
          Products
        </Link>

        <Link to="" smooth className="slider-links">
          Trainings
        </Link>
        <Link to="" smooth className="slider-links">
          Portfolio
        </Link>
      </div>
    </>
  );
}

export default Slider;
