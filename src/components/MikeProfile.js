import { Box } from "@mui/material";
import React from "react";

function MikeProfile() {
  return (
    <>
      <Box className="second-part"  sx={{width:{xs:"100%"}}}>
        <p className="name">Mortgage name (Title)</p>
        <h3 className="ques">Have any questions related to equity?</h3>
        <div className="profile">
          <img src="../images/milke.png" alt="" />
          <div className="details">
            <p>NMLS # 1222222</p>
            <h3>Mike K.</h3>
            <p>321.123.1234 mike@getworkdone.co</p>
          </div>
        </div>
        <button className="schedulebtn">Schedule a call</button>
      </Box>
    </>
  );
}

export default MikeProfile;
