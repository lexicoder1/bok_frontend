import "../App.css";
import { FaClone } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import img from "../assets/team.jpg";

function BusinessValues() {
  return (
    <>
      <div className="BusinessValues-container">
        <div>
        <div className="BusinessValues-container-i">
          <h1>Our business values</h1>
          <p>
            These core values shape the way we do business and maintain
            harmonous relationships with our client.
          </p>
        </div>
        <div className="BusinessValues-container-ii">
          <div className="BusinessValues-container-ii-i"> <IoIosCheckboxOutline className="BusinessValues-container-ii-i-IoIosCheckboxOutline"/> <p>Transparency</p></div>
          <div className="BusinessValues-container-ii-i"> <IoIosCheckboxOutline /> <p>Security</p></div>
          <div className="BusinessValues-container-ii-i"> <IoIosCheckboxOutline /> <p>Efficiency</p></div>
          <div className="BusinessValues-container-ii-i"> <IoIosCheckboxOutline /> <p>Honesty</p></div>
        </div>
        </div>
         <div className="business-img-container">
         <img src={img} alt="" className="business-img" />
         </div>
        {/* <div className="BusinessValues-container-ii">
          <div className="BusinessValues-container-ii-i">
            <div className="BusinessValues-container-ii-i-i">
            <FaClone />
            <h1>Transparency</h1>
            <p>We're an open book. We believe in total transparency and will always keep you in the loop. We'll be completely open about any findings, regardless of whether they're good or bad.</p>
            </div>
            <div className="BusinessValues-container-ii-i-i">
            <FaClone />
            <h1>Transparency</h1>
            <p>We're an open book. We believe in total transparency and will always keep you in the loop. We'll be completely open about any findings, regardless of whether they're good or bad.</p>
            </div>
          </div>

          <div className="BusinessValues-container-ii-i">
            <div className="BusinessValues-container-ii-i-i">
            <FaClone />
            <h1>Transparency</h1>
            <p>We're an open book. We believe in total transparency and will always keep you in the loop. We'll be completely open about any findings, regardless of whether they're good or bad.</p>
            </div>
            <div className="BusinessValues-container-ii-i-i">
            <FaClone />
            <h1>Transparency</h1>
            <p>We're an open book. We believe in total transparency and will always keep you in the loop. We'll be completely open about any findings, regardless of whether they're good or bad.</p>
            </div>
          </div>
         
        </div> */}
      </div>
    </>
  );
}

export default BusinessValues;
