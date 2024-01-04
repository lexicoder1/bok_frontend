import "../App.css";
import img from "../assets/eth.svg";
import img1 from "../assets/binance.svg";
import img2 from "../assets/polygon.svg";

import img4 from "../assets/solana.svg";
import img6 from "../assets/aws.svg";
import img7 from "../assets/digitalocean.svg";
import img5 from "../assets/binance.svg";





function Icons() {
  
  return (
    <>
    <div className="icons-container" >
        <div className="icons-container-i">
        <img src={img} alt="" className="icon-img" />
        <img src={img1} alt="" className="icon-img" />
        <img src={img2} alt="" className="icon-img" />
        
        </div>
        <div className="icons-container-ii">
        
        <img src={img4} alt="" className="icon-img" />
        <img src={img6} alt="" className="icon-img1" />
        <img src={img7} alt="" className="icon-img" />
        </div>
    </div>
    
    </>
  );
}

export default Icons;
