import { Box } from "@mui/material";
import React from "react";
import { equityData } from "../utils/data";
import { useMediaQuerySizes } from "../utils/mediaQuery";

function RenovationProgressBar() {
    const {isSmall} = useMediaQuerySizes();
    const strngPostRenovationValue = parseFloat(equityData.postRenovationHomeValue).toLocaleString();
    const strngPreRenovationValue = parseFloat(equityData.preRenovationValue).toLocaleString();
    const preRenovationValueBarWidth =(equityData.preRenovationValue * 100) / equityData.postRenovationHomeValue;
    const renovationCost = equityData.postRenovationHomeValue - equityData.preRenovationValue;
    const renovationCostBarWidth = (renovationCost * 100) / equityData.postRenovationHomeValue;
    const strngRenovationCost = parseFloat(renovationCost).toLocaleString();

  return (
    <>
      <Box sx={{ fontSize: "16px", fontWeight: "400", marginBottom: "10px" }}>
        <p>Post Renovation Home Value</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: isSmall ? "100%" : "600px",
          height: "230px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "auto",
            borderLeft: " 1px solid #d6c8c8",
          }}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box
              sx={{
                background: "#006dff",
                width: "100%",
                height: "30px",
                borderRadius: "0px 20px 20px 0px",
              }}
            ></Box>
            <Box sx={{ color: "black", fontSize: "20px", fontWeight: "600" }}>
              ${strngPostRenovationValue}
            </Box>
          </Box>

          <Box sx={{ marginTop: "40px", fontSize: "16px", fontWeight: "400" }}>
            <p>Renovation Cost</p>
          </Box>

          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box
              sx={{
                background: "#1d7e64",
                width: `${renovationCostBarWidth}%`,
                height: "30px",
                marginTop: "10px",
                borderRadius: "0px 20px 20px 0px",
              }}
            ></Box>
            <Box sx={{ color: "black", fontSize: "20px", fontWeight: "600" }}>
              ${strngRenovationCost}
            </Box>
          </Box>

          <Box sx={{ marginTop: "40px", fontSize: "16px", fontWeight: "400" }}>
            <p>Pre Renovation Home Value</p>
          </Box>

          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box
              sx={{
                background: "#273e59",
                width: `${preRenovationValueBarWidth}%`,
                height: "30px",
                marginTop: "10px",
                borderRadius: "0px 20px 20px 0px",
              }}
            ></Box>
            <Box sx={{ color: "black", fontSize: "20px", fontWeight: "600" }}>
              ${strngPreRenovationValue}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default RenovationProgressBar;
