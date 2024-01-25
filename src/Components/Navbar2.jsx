import "../App.css";

import {tog} from "../State/context";
import { useContext } from "react";

function Audits() {
  const { toggle, sliderbg, hideToggle, refTwo} =useContext(tog);
  return (
    <>
      
          <div  className={`slider ${toggle}`} ref={refTwo}>

                <a href="#contract" onClick={hideToggle}>Contract</a>
            
                <a href="#features" onClick={hideToggle}>Features</a>
            
                <a href="#why" onClick={hideToggle}>Why Tuna?</a>
                <a href="#why" onClick={hideToggle}>Stake</a>
                <a href="#road" onClick={hideToggle}>Roadmap</a>
            
                <a href="#bye" onClick={hideToggle}>How to buy</a>
                </div>   
        
    </>
  );
}

export default Audits;
