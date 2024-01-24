import "../App.css";
import img from "../assets/Coin-Gif.gif";

function Audits() {
  
  return (
    <>
    
      <header class="desctop_menu">
        <div class="logo2">
            <img src={img} alt="logo"/>
          </div>
          <nav class="main-menu">
            <ul class="menu-items">
              <li><a href="#contract">Contract</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#why">Why Tuna?</a></li>
              <li><a href="#why">Stake</a></li>
              <li><a href="#road">Roadmap</a></li>
              <li class="bye"><a href="#bye">How to buy</a></li>
            </ul>
          </nav>
      </header>
      
    </>
  );
}

export default Audits;
