import "../App.css";
import img from "../assets/Coin-Gif.gif";
import img6 from "../assets/TWITTER.png";
import img7 from "../assets/TELEGRAM.png";
import img8 from "../assets/EMAIL.png";

function Audits() {
  
  return (
    <>
    
    <span className="social">
        <span className="so">
          {" "}
          <a href="http://twitter.com/long_live_tuna">
            <img src={img6} alt="" />
            <p>
              <span style={{ color: "#ffffff" }}>
                twitter.com/long_live_tuna
              </span>
            </p>
          </a>
        </span>
        <span className="so">
          <a href="http://t.me/TunaSolana">
            <img src={img7} alt="" />
            <p>
              <span style={{ color: "#ffffff" }}>t.me/TunaSolana</span>
            </p>
          </a>
        </span>
        <span className="so">
          <a href="mailto:Tunaonsol@gmail.com">
            <img src={img8} alt="" />
            <p>
              <span style={{ color: "#ffffff" }}>Tunaonsol@gmail.com</span>
            </p>
          </a>
        </span>
      </span>
      <span className="footer">
        <p>longlivetuna.xyz © 2024 Copyright All Rights Reserved</p>
      </span>
      
    </>
  );
}

export default Audits;
 
 