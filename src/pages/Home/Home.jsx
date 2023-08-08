import React from "react";
import "./Home.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <Heading title="Home" />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
