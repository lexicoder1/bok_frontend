import "../App.css";
import img from "../assets/Coin-Gif.gif";
import {tog} from "../State/context";
import { useContext } from "react";
function Audits() {
   const { toggle,hideToggle, handleToggle, refOne} =useContext(tog);
   console.log(toggle,"ddd")
  return (
    <>
    <div className="navbar-last">
     <div className={`hamb__field ${toggle==="show"?"active":""}`}  onClick={toggle==="show"?hideToggle:handleToggle} ref={refOne}>
                <span className="bar"></span> <span className="bar"></span>
                <span className="bar"></span>
              </div>
        <div className="logo2">
            <img src={img} alt="logo"/>
          </div>
          </div>
    
      <header className="desctop_menu">
      <div className={`hamb__field ${toggle==="show"?"active":""}`} id="hamb" onClick={toggle==="show"?hideToggle:handleToggle} ref={refOne}>
                <span className="bar"></span> <span className="bar"></span>
                <span className="bar"></span>
              </div>
        <div className="logo2">
            <img src={img} alt="logo"/>
          </div>
          <nav className="main-menu">
            <ul className="menu-items">
              <li><a href="#contract">Contract</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#why">Why Tuna?</a></li>
              <li><a href="#why">Stake</a></li>
              <li><a href="#road">Roadmap</a></li>
              <li className="bye"><a href="#bye">How to buy</a></li>
            </ul>
          </nav>
      </header>
      
    </>
  );
}

export default Audits;
