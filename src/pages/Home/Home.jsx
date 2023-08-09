import React, { useState } from "react";
import "./Home.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";
import TotalSpend from "../../components/TotalSpend/TotalSpend";
import WeeklyGraph from "../../components/WeeklyGraph/WeeklyGraph";

const Home = () => {
  const chartData = [45, 30, 12, 55, 70, 20, 30];

  const [data, setData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total spend this week",
        data: chartData,
        backgroundColor: "rgba(178, 174, 174, 0.7)",
        barPercentage: 0.5,
        hoverBackgroundColor: "#FFBF00",
      },
    ],
  });

  return (
    <div className="home-page">
      <div>
        <Heading title="Home" />
      </div>
      <div className="home-page__container">
        <WelcomeUser />
        <TotalSpend />
        <div>
          <WeeklyGraph chartData={data} />
        </div>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
