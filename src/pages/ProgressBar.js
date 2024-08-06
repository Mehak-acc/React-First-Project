import React from "react";
import { Box } from "@mui/material";

function ProgressBar() {
  return (
    <>
      {/* <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress"></div>&nbsp;&nbsp;
          <div className="progress"></div>&nbsp;&nbsp;
          <div className="progress"></div>&nbsp;&nbsp;
          <div className="progress"></div>&nbsp;&nbsp;
          <div className="progress"></div>&nbsp;&nbsp;
          <div className="progress-white"></div>&nbsp;&nbsp;
          <div className="progress-white"></div>&nbsp;&nbsp;
          <div className="progress-white"></div>&nbsp;&nbsp;
          <div className="progress-white"></div>&nbsp;&nbsp;
          <div className="progress-white"></div>
        </div>
      </div> */}
      <Box
        sx={{
          width: "100%",
          height: "30px",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            background:
              "linear-gradient(to right, #1D7E64 0%, #1D7E64 50%, #f6f6f6 20%, #f6f6f6 100%)",
          },
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background:
              "linear-gradient(to right, #9c9e9f 0%, #9c9e9f 50%, #f6f6f6 50%, #f6f6f6 100%)",
          },
        }}
      ></Box>
    </>
  );
}

export default ProgressBar;
