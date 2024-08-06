import React, { useState } from "react";
import BuyAnotherHome from "./BuyAnotherHome";
import IncreaseHomeValue from "./IncreaseHomeValue";
import { Box } from "@mui/material";
import { useMediaQuerySizes } from "../utils/mediaQuery";

function Affordibilty() {
  const { isSmall } = useMediaQuerySizes();
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);
  const [heading, setHeading] = useState("Affordability");
  const [buttonStyles, setButtonStyles] = useState({
    anotherbtn: { backgroundColor: "#273E59", color: "#fff" },
    valuebtn: { backgroundColor: "#F0F0F0", color: "#000" },
  });

  const handleButtonClick1 = () => {
    setShowButton1(true);
    setShowButton2(false);
    setHeading("Affordability");
    setButtonStyles({
      anotherbtn: { backgroundColor: "#273E59", color: "#fff" },
      valuebtn: { backgroundColor: "#F0F0F0", color: "#000" },
    });
  };

  const handleButtonClick2 = () => {
    setShowButton2(true);
    setShowButton1(false);
    setHeading("Home Equity");
    setButtonStyles({
      anotherbtn: { backgroundColor: "#F0F0F0", color: "#000" },
      valuebtn: { backgroundColor: "#273E59", color: "#fff" },
    });
  };

  return (
    <>
      <section className="affordability-part">
        <div className="container">
          <div className="affordability">
            <Box
              className="affordability-heading"
              sx={{
                display: "flex",
                flexDirection: isSmall ? "column" : "unset",
              }}
            >
              <h3>{heading}</h3>
              <Box
                className="buttons-div"
                sx={{
                  marginTop: isSmall ? "25px" : "unset", 
                }}
              >
                <button
                  className="anotherbtn"
                  style={buttonStyles.anotherbtn}
                  onClick={handleButtonClick1}
                >
                  Buy another home
                </button>
                <button
                  className="valuebtn"
                  style={buttonStyles.valuebtn}
                  onClick={handleButtonClick2}
                >
                  Increase home value
                </button>
              </Box>
            </Box>
            {showButton1 && (
              <div style={{ clear: "both" }}>
                <BuyAnotherHome />
              </div>
            )}
            {showButton2 && (
              <div style={{ clear: "both" }}>
                <IncreaseHomeValue />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Affordibilty;
