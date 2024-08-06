import React from "react";
import EquityProgress from "./EquityProgress";
import AskedQuestion from "./AskedQuestion";
import Box from "@mui/material/Box";
import MikeProfile from "./MikeProfile";
import { useMediaQuerySizes } from "../utils/mediaQuery";

function Banner() {
  const {isSmall} = useMediaQuerySizes()
  return (
    <Box
      className="container"
      sx={{ display: "flex", gap: isSmall ? "10px" : "70px",   flexDirection: isSmall ? "column" :'unset' }} 
    >
      <EquityProgress />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AskedQuestion />
        <MikeProfile />
      </Box>
    </Box>
  );
}

export default Banner;
