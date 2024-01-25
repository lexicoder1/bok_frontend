import "../App.css";
import img from "../assets/Coin-Gif.gif";
import {tog} from "../State/context";
import { useContext } from "react";
function Audits() {
    const { toggle,hideToggle, handleToggle, refOne} =useContext(tog);
  return (
    <>
      <div class="navbar">
        <div class="container">
          <div class="navbar__wrap">
            <div class="hamb">
            
           
              <div class={`hamb__field ${toggle==="show"?"active":""}`} id="hamb" onClick={toggle==="show"?hideToggle:handleToggle} ref={refOne}>
                <span class="bar"></span> <span class="bar"></span>
                <span class="bar"></span>
              </div>
            </div>
            <a href="#" class="logo" id="logo">
              <img src={img} alt="" />
            </a>
            <ul class="menu" id="menu">
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
      <div class="popup" id="popup"></div>
    </>
  );
}

export default Audits;