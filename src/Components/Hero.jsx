import "../App.css";
import img from "../assets/hero-img1.png";
import { HashLink as Link } from "react-router-hash-link";

function Hero() {
  return (
    <>
    <div className="hero-body">
      <div className="hero-container">
        <div className="hero-left">
        <h1>Transform Your Business With Our Innovative Web3 And AI Software Development Services.
Join The Future, Today!</h1>
<div className="hero-con-container">
 <Link to="/Contacts" smooth className="hero-con">Contact Us</Link>
 <Link to="/Contacts" smooth className="hero-consult">Consult Us For Free</Link>
{/* <div className="hero-consult"> Consult Us For Free</div> */}
</div>
</div>
      <div className="hero-right">
      <img src={img} alt="" className="hero-img" />
       </div>
      </div>
    
      </div>
     
    </>
  );
}

export default Hero;