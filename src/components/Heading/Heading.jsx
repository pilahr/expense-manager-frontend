import React from "react";
import "./Heading.scss";

const Heading = ({ title }) => {
  return (
    <div>
      <h4 className="heading">{title}</h4>
    </div>
  );
};

export default Heading;
