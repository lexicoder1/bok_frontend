import "../App.css";
import img from "../assets/Coin-Gif.gif";

function Audits() {
  
  return (
    <>
    
      <header className="desctop_menu">
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
