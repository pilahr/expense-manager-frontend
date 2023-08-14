import React from "react";
import "./Home.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";
import TotalSpend from "../../components/TotalSpend/TotalSpend";
import WeeklyGraph from "../../components/WeeklyGraph/WeeklyGraph";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
// eslint-disable-next-line
import { Chart as ChartJs } from "chart.js/auto";

const Home = ({ expense }) => {
  const thisMonth = new Date().toDateString().split(" ")[1];

  const recentlySpent = expense
    .filter((spend) => new Date(spend.year))
    .filter(
      (spend) =>
        new Date(spend.month).toDateString().split(" ")[1] === thisMonth
    )
    .sort((a, b) => b.date - a.date);

  console.log(recentlySpent);

  const chartData = [45, 30, 12, 55, 70, 20, 30];

  const weeklyChartFormat = {
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
  };

  return (
    <div className="home-page">
      <div>
        <Heading title="Home" />
      </div>
      <div className="home-page__container">
        <WelcomeUser />
        <TotalSpend />
        <div>
          <WeeklyGraph chartData={weeklyChartFormat} />
        </div>

        <div className="home-page__container--recent-spent">
          <h4 className="home-page__container--recent-spent-text">
            Recently Spent
          </h4>
          {recentlySpent.map((spending, index) => {
            return (
              <ExpenseCard
                key={index}
                name={spending.name}
                cost={spending.cost}
                category={spending.category}
                date={spending.date}
                month={spending.month}
                year={spending.year}
              />
            );
          })}
        </div>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
