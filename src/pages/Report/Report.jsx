import React from "react";
import "./Report.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";

const Report = () => {
  return (
    <div className="report-page">
      <div>
        <Heading title="Report" />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Report;
