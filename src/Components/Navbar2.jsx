import "../App.css";

import {tog} from "../State/context";
import { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
function Audits() {
  const { toggle, sliderbg, hideToggle, refTwo} =useContext(tog);
  return (
    <>
      
          <div  className={`slider ${toggle}`} ref={refTwo}>

                <Link to="/#contract" onClick={hideToggle}>Contract</Link>
            
                <Link to="/#features" onClick={hideToggle}>Features</Link>
            
                <Link to="/#why" onClick={hideToggle}>Why Tuna?</Link>
                <Link to="/Stake" onClick={hideToggle}>Stake</Link>
                <Link to="/#road" onClick={hideToggle}>Roadmap</Link>
            
                <Link to="/#bye" onClick={hideToggle}>How to buy</Link>
                </div>   
        
    </>
  );
}

export default Audits;
