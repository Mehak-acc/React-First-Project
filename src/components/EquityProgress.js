import { Box } from "@mui/material";
import React from "react";
import ProgressBar from "./ProgressBar";
import { equityData } from "../utils/data";

function EquityProgress() {
  const strngHelocValue = parseFloat(equityData.availableHeloc).toLocaleString();
  const strngTotalEquity = parseFloat(equityData.totalEquity).toLocaleString();
  const strngHomeCurrentValue = parseFloat(equityData.homeCurrentValue).toLocaleString();
  const strngMaxDebt = parseFloat(equityData.maxDebt).toLocaleString();
  const strngOutstandingLoans = parseFloat(equityData.outstandingHomeLoans).toLocaleString();


  return (
    <>
      <section className="equity-section">
        <div >
          <div className="equity">
            <Box className="first-div" sx={{width:{xs:"100%"}}}>
              <Box className="price-div" sx={{marginBottom:"23px"}}>
                <div className="price1">
                  <p>Available HELOC</p>
                  <h3>${strngHelocValue}</h3>
                </div>
                <div className="price2">
                  <p>Total home equity</p>
                  <h3>${strngTotalEquity}</h3>
                </div>
              </Box>
              <img className="polygon" src="../images/polygon.png" alt="" />
              {/* <Box  sx={{width:{xs:"100%"}}}><img
                className="progress-bar"
                src={<ProgressBar/>}
                alt=""
              /></Box> */}
              <ProgressBar availableHeloc={equityData.availableHeloc} totalEquity={equityData.totalEquity}/>
              <p className="know-para">
                Know more about your HELOC breakdown calculation
              </p>
              <div className="lists">
                <ul>
                  <li>Home current value</li>
                  <li>Maximum debt to be secured by your home</li>
                  <li>Outstanding home loans</li>
                  <li className="li1">Available HELOC</li>
                </ul>
                <ul className="values">
                  <li>${strngHomeCurrentValue} x 80% (LTV)</li>
                  <li>${strngMaxDebt}</li>
                  <li className="li2">-${strngOutstandingLoans}</li>
                  <li className="li3">${strngHelocValue}</li>
                </ul>
              </div>
              <p className="disclaimer">
                Disclaimer: All the above values are indicative, talk to your
                real state agent or your mortgage professional to get the real
                values
              </p>
            </Box>
          </div>
        </div>
      </section>
    </>
  );
}

export default EquityProgress;
