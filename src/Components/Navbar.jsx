import "../App.css";
import img from "../assets/Coin-Gif.gif";
import {tog} from "../State/context";
import { useContext } from "react";
function Audits() {
    const { toggle,hideToggle, handleToggle, refOne} =useContext(tog);
  return (
    <>
    {/* <div className="navbar-container">
    <div className={`hamb__field ${toggle==="show"?"active":""}`} id="hamb" onClick={toggle==="show"?hideToggle:handleToggle} ref={refOne}>
                <span className="bar"></span> <span className="bar"></span>
                <span className="bar"></span>
              </div>
    <a href="#" className="logo" id="logo">
              <img src={img} alt="" />
            </a>
    </div> */}
      {/* <div className="navbar">
        <div className="container">
          <div className="navbar__wrap">
            <div className="hamb">
            
           
              
            </div>
            <a href="#" className="logo" id="logo">
              <img src={img} alt="" />
            </a>
            <ul className="menu" id="menu">
              <li>
                <a href="#contract">Contract</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#why">Why Tuna?</a>
              </li>
              <li>
                <a href="#road">Roadmap</a>
              </li>
              <li>
                <a href="#bye">How to buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="popup" id="popup"></div> */}
    </>
  );
}

export default Audits;
