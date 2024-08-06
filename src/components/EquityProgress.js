import { Box } from "@mui/material";
import React from "react";
import ProgressBar from "../pages/ProgressBar";

function EquityProgress() {
  return (
    <>
      <section className="equity-section">
        <div >
          <div className="equity">
            <Box className="first-div" sx={{width:{xs:"100%"}}}>
              <div className="price-div">
                <div className="price1">
                  <p>Available HELOC</p>
                  <h3>$65,000</h3>
                </div>
                <div className="price2">
                  <p>Total home equity</p>
                  <h3>$125,000</h3>
                </div>
              </div>
              <img className="polygon" src="../images/polygon.png" alt="" />
              {/* <Box  sx={{width:{xs:"100%"}}}><img
                className="progress-bar"
                src={<ProgressBar/>}
                alt=""
              /></Box> */}
              <ProgressBar/>
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
                  <li>$300,00 x 80% (LTV)</li>
                  <li>$240,000</li>
                  <li className="li2">-$175,000</li>
                  <li className="li3">$65,000</li>
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
