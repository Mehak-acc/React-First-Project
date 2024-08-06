import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Affordibilty from "../components/Affordibilty";
import RecommendedProjects from "../components/RecommendedProjects";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <>
      <TopBar />
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
