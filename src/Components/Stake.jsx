import "../App.css";

import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import img from "../assets/nft.jpg";
import { useState } from "react";
function Audits() {
  const [currentPage, setCurrentPage] = useState(1);
  const data = Array.from({ length: 19 }, (_, index) => `Item ${index + 1}`);
  const itemsPerPage = 6;
  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const currentItems = data.slice(startIndex, endIndex);
  console.log(currentItems.length);
  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="stake-container">
        <div
          className="stake-container-i"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <p>Staked:{3}</p>
          <p>Rate:{0.2}SOL/Day</p>
          <p>Earnings:{0.0}SOL</p>
        </div>

        <div className="stake-container-main">
          <div className="stake-container-main-i">
            <p style={{ marginTop: "30px", marginLeft: "15px" ,fontSize:"13px" }}>
              Select your Tokens
            </p>
            <div className="stake-container-content-container">
              {currentItems.map((item, index) => (
                <div className="stake-container-content "  ><img src={img} style={{width:"100%",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}} alt="" />
                <p className="stake-p" >Tuna Nft</p></div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "15px",
                paddingRight: "15px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <FaLessThan
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{ cursor: "pointer" }}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    style={{ marginLeft: "2px" }}
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage.length === index + 1}
                  >
                    {index + 1}
                  </button>
                ))}
                <FaGreaterThan
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={true}
                  style={{ marginLeft: "2px", cursor: "pointer" }}
                />
              </div>
              <button
                style={{
                //   width: "150px",
                  height: "40px",
                  background: "rgba(54, 54, 54, 0.2)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  border: "none",
                }}
                className="btn-stake"
              >
                <p> Stake Token</p>
              </button>
            </div>
          </div>
          <div className="stake-container-main-i">
            <p style={{ marginTop: "30px", marginLeft: "15px" ,fontSize:"13px" }}>
              View Staked Tokens
            </p>
            <div className="stake-container-content-container">
              {currentItems.map((item, index) => (
                <div className="stake-container-content "  ><img src={img} style={{width:"100%",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}} alt="" />
                <p className="stake-p" >Tuna Nft</p></div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "15px",
                paddingRight: "15px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <FaLessThan
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{ cursor: "pointer" }}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    style={{ marginLeft: "2px" }}
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage.length === index + 1}
                  >
                    {index + 1}
                  </button>
                ))}
                <FaGreaterThan
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={true}
                  style={{ marginLeft: "2px", cursor: "pointer" }}
                />
              </div>
              <button
                style={{
                //   width: "150px",
                  height: "40px",
                  background: "rgba(54, 54, 54, 0.2)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  border: "none",
                }}

                className="btn-stake-i"
              >
                <p> UnStake Token</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Audits;
