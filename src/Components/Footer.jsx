import "../App.css";
import img from "../assets/lexilaablogo.png";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-left-i">
            <img src={img} alt="" className="left-img" />
          </div>
          <p>© 2023 by Lexilaab. All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <div className="footer-right-i">
            <h2>Services</h2>
            <p>Web3</p>
            <p>SoftWare</p>
            <p>Security</p>
          </div>
          <div className="footer-right-i">
            <h2>Services</h2>
            <p>Web3</p>
            <p>SoftWare</p>
            <p>Security</p>
          </div>
      
          <div className="footer-right-i">
            <h2>Services</h2>
            <p>Web3</p>
            <p>SoftWare</p>
            <p>Security</p>
            
          </div>
         
      
        </div>
        <div className="footer-right-i-p">
          <p>© 2023 by Lexilaab. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
