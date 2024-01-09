import "../App.css";
import img from "../assets/shield.png";

function Audits() {
  
  return (
    <>
    <div className="Audits-contain">
   <div className="Audits-container">
  <div className="Audits-left">
<h1>Smart Contracts Auditing Services, DeFi Safety Audits</h1>
<p>Emerging Web3 Ventures Trust Our Smart Contract Audits</p>
<div className="Audits-left-button-container">
  <button className="Audits-left-button-i">Explore Our Audits Process</button>
  <button className="Audits-left-button-ii">Consult Us For Free</button>
</div>
  </div>
  <div>
  <img src={img} alt="" className="Audits-left-img" />
  </div>

   </div>
    <div className="audits-achivements">
      <div className="audits-achivements-i" >
        <h1>100+</h1>
        <p>Projects Secured
By QuillAudits</p>
      </div>
      <div className="audits-achivements-i" >
        <h1>100+</h1>
        <p>Projects Secured
By QuillAudits</p>
      </div>
      <div className="audits-achivements-i" >
        <h1>100+</h1>
        <p>Projects Secured
By QuillAudits</p>
      </div>
      <div className="audits-achivements-i">
        <h1>100+</h1>
        <p>Projects Secured
By QuillAudits</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default Audits;
