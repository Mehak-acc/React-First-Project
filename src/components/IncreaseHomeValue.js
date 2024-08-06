import { Box } from "@mui/material";
import React from "react";
import { useMediaQuerySizes } from "../utils/mediaQuery";

function Button2() {
  const { isSmall } = useMediaQuerySizes();

  return (
    <div>
      <div className="equityy">
        <Box
          className="home-value-section"
          sx={{
            display: "flex",
            flexDirection: isSmall ? "column" : "unset",
          }}
        >
          <div className="home-value1">
            <button className="increasebtn">Increase your home value</button>
            <h3>
              Use your <span>+$65,000 </span> worth of equity
            </h3>
            <p className="post">Post renovation Home value</p>
            <div className="bars-div">
              <div className="bar1">
                <Box
                  sx={{
                    width: isSmall ? "100%" : "unset",
                  }}
                >
                  <img className="barimg1" src="../images/bar1.png" alt="" />
                </Box>
                <p>$410,000</p>
              </div>
              <p className="post">Renovation costs</p>
              <div className="bar1">
                <img src="../images/bar2.png" alt="" />
                <p>$110,000</p>
              </div>
              <p className="post">Pre-renovation costs</p>
              <div className="bar1">
                <img className="barimg1" src="../images/bar3.png" alt="" />
                <p>$300,000</p>
              </div>
            </div>
          </div>
          <div className="home-value2">
            <h4>What home improvements are on your-to-do list?</h4>
            <div className="to-do-list1">
              <button className="solarbtn">Solar panel</button>
              <button className="btn">Home office</button>
            </div>
            <div className="to-do-list1">
              <button className="btn">Garage</button>
              <button className="btn">Kitchen remodel</button>
            </div>
            <div className="to-do-list1">
              <button className="btn">Bathroom updates</button>
              <button className="btn">New roof</button>
            </div>
            <button className="btn landscaping">Landscaping</button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Button2;
