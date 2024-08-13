import React from "react";
import { Box } from "@mui/material";
import { equityData } from "../utils/data";

function ProgressBar({availableHeloc,totalEquity}) {
  const percent =  ((availableHeloc *100) / (totalEquity));
  const value = 100 / (percent/10);
  const afterValue = 100 / ((100- percent)/10);
  
  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "20px",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: `${percent}%`,
            height: "100%",
            borderRadius: "20px 0px 0px 20px",
            background:`repeating-linear-gradient(90deg, #fff 0, #fff 4px, #1D7E64 4px, #1D7E64 ${value}%)`
              // "linear-gradient(to right, #1D7E64 0%, #1D7E64 20%, white 20%, white 22%, #1D7E64 22%, #1D7E64 42%, white 42%, white 44%, #1D7E64 44%, #1D7E64 64%, white 64%, white 66%, #1D7E64 66%, #1D7E64 86%, white 86%, white 88%, #1D7E64 88%, #1D7E64 100%)",
          },
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width:`${100-percent}%`,
            height: "100%",
            borderRadius: "0px 20px 20px 0px",
            background:`repeating-linear-gradient(90deg, #fff 0, #fff 4px, #D9D9D9 4px, #D9D9D9 ${afterValue}%)`
              // "linear-gradient(to right, white 0%, white 2%, #9c9e9f 0%, #9c9e9f 20%, white 20%, white 22%, #9c9e9f 22%, #9c9e9f 42%, white 42%, white 44%, #9c9e9f 44%, #9c9e9f 64%, white 64%, white 66%, #9c9e9f 66%, #9c9e9f 86%, white 86%, white 88%, #9c9e9f 88%, #9c9e9f 100%)",
          },
        }}
      ></Box>
    </>
  );
}

export default ProgressBar;
