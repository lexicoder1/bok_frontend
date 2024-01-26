import "../App.css";
import img from "../assets/Coin-Gif.gif";
import {tog} from "../State/context";
import { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { RiWallet2Line } from "react-icons/ri";
function Audits() {
   const { toggle,hideToggle, handleToggle, refOne} =useContext(tog);
   console.log(toggle,"ddd")
  return (
    <>
    <div className="navbar-last">
     <RiWallet2Line style={{color:"white",width:"40px",height:"40px",cursor:"pointer" ,marginLeft:"15px"}}/>
        
        <Link to="/#" className="logo" id="logo">
              <img src={img} alt="" />
            </Link>
        
         
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
              <li><Link to="/#contract">Contract</Link></li>
              <li><Link to="/#features">Features</Link></li>
              <li><Link to="/#why">Why Tuna?</Link></li>
              <li><Link to="/Stake">Stake</Link></li>
              <li><Link to="/#road">Roadmap</Link></li>
              
              <RiWallet2Line style={{color:"white",width:"40px",height:"40px",cursor:"pointer"}}/>
            </ul>
          </nav>
      </header>
      
    </>
  );
}

export default Audits;
