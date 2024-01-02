import "../App.css";
import img from "../assets/hero-img1.jpg";


function Hero() {
  return (
    <>
    <div className="hero-body">
      <div className="hero-container">
        <div className="hero-left">
        <h1>Transform your business with our innovative web3 and AI software development services.
Join the future, today!</h1>
<div className="hero-con-container">
<div className="hero-con"> Contact Us</div>
<div className="hero-consult"> Consult Us For Free</div>
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