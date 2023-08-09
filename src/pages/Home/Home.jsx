import React from "react";
import "./Home.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";


const Home = () => {


  return (
    <div className="home-page">
      <div>
        <Heading title="Home" />
      </div>
      <div>
        <WelcomeUser />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
