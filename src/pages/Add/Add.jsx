import React from "react";
import "./Add.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";

const Add = () => {
  return (
    <div className="add-page">
      <div>
        <Heading title="Add Expenses" />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Add;
