import React from "react";
import Herosection from "@/components/Herosection";
import { Helmet } from "react-helmet";
const ResearchProject = () => {
  return (
    <>
      <Helmet>
        <title>Research Projects - SVIET</title>
      </Helmet>
      <Herosection
        heading={"Research Projects"}
        shortDescription={"The research project section showcases innovative studies and discoveries conducted by our students and faculty, highlighting academic excellence and groundbreaking work."}
        imgSrc={"https://sviet.org.in/wp-content/uploads/926165C3-7256-4B01-B37C-9723B1D2F645.jpg"}
      />
    </>
  );
};

export default ResearchProject
 