import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Affordibilty from "../components/Affordibilty";
import RecommendedProjects from "../components/RecommendedProjects";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <>
      <Navbar />
      <Box >
        <div className="container heading">Your equity breakdown</div>
      </Box>
      <Banner />
      <Affordibilty />
      <RecommendedProjects />
    </>
  );
}

export default HomePage;
