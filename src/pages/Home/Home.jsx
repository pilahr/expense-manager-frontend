import React from "react";
import "./Home.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";
import TotalSpend from "../../components/TotalSpend/TotalSpend";
import WeeklyGraph from "../../components/WeeklyGraph/WeeklyGraph";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import FoodIcon from "../../assets/icons/food.png";
import SnackIcon from "../../assets/icons/snack.png";
import CoffeeIcon from "../../assets/icons/coffee.png";
import AlcoholIcon from "../../assets/icons/beer.png";
import TransportIcon from "../../assets/icons/transportation.png";
import EntertainmentIcon from "../../assets/icons/ticket.png";
import ShoppingIcon from "../../assets/icons/shopping.png";
import SubscriptionIcon from "../../assets/icons/subscription.png";

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
        <TotalSpend recentlySpent={recentlySpent} />
        <div>
          <WeeklyGraph chartData={weeklyChartFormat} />
        </div>

        <div className="home-page__container--recent-spent">
          <h4 className="home-page__container--recent-spent-text">
            Recently Spent
          </h4>
          {recentlySpent.map((spending, index) => {
            let iconStyle = "";
            switch (spending.category) {
              case "Food":
                iconStyle += FoodIcon;
                break;
              case "Snack":
                iconStyle += SnackIcon;
                break;
              case "Coffee":
                iconStyle += CoffeeIcon;
                break;
              case "Alcohol Beverage":
                iconStyle += AlcoholIcon;
                break;
              case "Transportation":
                iconStyle += TransportIcon;
                break;
              case "Entertainment":
                iconStyle += EntertainmentIcon;
                break;
              case "Shopping":
                iconStyle += ShoppingIcon;
                break;
              case "Subscription":
                iconStyle += SubscriptionIcon;
                break;

              default:
                iconStyle += ShoppingIcon;
                break;
            }
            return (
              <ExpenseCard
                key={index}
                name={spending.name}
                cost={spending.cost}
                category={spending.category}
                date={spending.date}
                month={spending.month}
                year={spending.year}
                iconStyle={iconStyle}
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
