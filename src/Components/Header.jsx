import "../App.css";
import { HashLink as Link } from "react-router-hash-link";
import img from "../assets/lexilaablogo.png";
import { RiMenu3Fill } from "react-icons/ri";
import {tog} from "../State/context";
import { useContext } from "react";



function Header() {
  const {handleToggle} = useContext(tog) 

  return (
    <>
      <div className="header-flex">
        <div className="header-left">
          <img src={img} alt="" className="left-img" />
        </div>
        <div className="header-center" >
          <Link to="" smooth className="header-center-links">
            Home
          </Link>
          <div className="header-web3-content-container">
            <Link to="" smooth className="header-center-links">
              Web3
            </Link>
            {/* <div className="header-web3-content-touch">
            <div className="header-web3-content">
              
              <Link to="" className="header-dropdown-links">
              Smart contract
              </Link>
              <Link to="" className="header-dropdown-links">Defi</Link>
              <Link to="" className="header-dropdown-links">Nft</Link>
              <Link to="" className="header-dropdown-links">Play To Earn</Link>
            </div>
            </div> */}
          </div>

          <div className="header-web3-content-container">
            <Link to="" smooth className="header-center-links">
              Software
            </Link>
            {/* <div className="header-web3-content-touch">
            <div className="header-web3-content">
              
              
            <Link to="" className="header-dropdown-links">
              Software Development
              </Link>
              <Link to="" className="header-dropdown-links">Web Devlopment</Link>
              <Link to="" className="header-dropdown-links">Devops</Link>
            
            </div>
            </div> */}
          </div>
          {/* <Link to="" smooth className="header-center-links">
            Software
          </Link> */}
           <div className="header-web3-content-container">
            <Link to="/Audits" smooth className="header-center-links">
              Audits
            </Link>
            {/* <div className="header-web3-content-touch">
            <div className="header-web3-content">
              
               
            <Link to="" className="header-dropdown-links">
              Smart Contract Audits
              </Link>
              <Link to="" className="header-dropdown-links">Defi Audits</Link>
              <Link to="" className="header-dropdown-links">Nft Audits</Link>
           
            </div>
            </div> */}
          </div>
          {/* <Link to="" smooth className="header-center-links">
            Security
          </Link> */}
           <div className="header-web3-content-container">
            <Link to="" smooth className="header-center-links">
              Products
            </Link>
            {/* <div className="header-web3-content-touch">
            <div className="header-web3-content">
              
               
            <Link to="" className="header-dropdown-links">
              Flippers Game
              </Link>
        
            </div>
            </div> */}
          </div>
          {/* <Link to="" smooth className="header-center-links">
            Products
          </Link> */}
          <Link to="/Trainings" smooth className="header-center-links">
            Trainings
          </Link>
          <Link to="" smooth className="header-center-links">
            Portfolio
          </Link>
        </div>
        <div className="header-right-i">
          <div className="header-right"> Contact Us</div>
          <RiMenu3Fill className="g"  onClick={handleToggle}/>
        </div>
      </div>
    </>
  );
}

export default Header;
