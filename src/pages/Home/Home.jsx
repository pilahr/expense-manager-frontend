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

  const getRecentlySpending = (expense) => {
    return expense
      .filter((spend) => new Date(spend.year))
      .filter(
        (spend) =>
          new Date(spend.month).toDateString().split(" ")[1] === thisMonth
      )
      .sort((a, b) => b.date - a.date);
  };
  const recentlySpent = getRecentlySpending(expense);


  // const getFormattedData = (recentlySpent) => {
  //   const data = [];
  //   Object.entries(recentlySpent).map(([key, value]) => {
  //     return data.push({
  //       date: value["date"],
  //       cost: value["cost"],
  //     });
  //   });
  //   return data;
  // };
  // const formattedData = getFormattedData(recentlySpent);

  // console.log(formattedData);

  // Group expenses on the same date
  const groupBy = (arr, key) => {
    let objectValue = {};
    return arr.reduce((acc, val) => {
      const newObj = val[key];
      acc[newObj] = [...(acc[newObj] || []), val];
      return acc;
    }, objectValue);
  };
  const objGroupedByRecentDate = groupBy(recentlySpent, "date");

  const getDateArray = (objGroupedByRecentDate) => {
    const datesArray = Object.keys(objGroupedByRecentDate);
    datesArray.sort((a, b) => b - a);

    let newDatesArray = [];
    for (let i = 0; i < 7; i++) {
      newDatesArray.push(datesArray[i] + " " + thisMonth);
    }
    return newDatesArray;
  };

  const getSevenDaysSpending = (objGroupedByRecentDate) => {
    const costsArray = Object.values(objGroupedByRecentDate).sort(
      (a, b) => b[0]["date"] - a[0]["date"]
    );

    let sevenDaysCostsArray = [];
    let eachDayCostsArray = [];

    for (let i = 0; i < 7; i++) {
      sevenDaysCostsArray.push(costsArray[i]);
    }


    for (let j = 0; j < sevenDaysCostsArray.length; j++) {
      // eachDayCostsArray.push(sevenDaysCostsArray[j][0]["cost"]);
    }


    return eachDayCostsArray;
  };
  const sevenDaysSpending = getSevenDaysSpending(objGroupedByRecentDate);

  // const getCostsSpending = (sevenDaysSpending) => {
  //   let eachDayCostsArray = [];
  //   for (let i = 0; i < sevenDaysSpending.length; i++) {
  //     eachDayCostsArray.push(sevenDaysSpending[i][0]["cost"]);
  //   }
  //   console.log(eachDayCostsArray);

  //   return eachDayCostsArray;
  // };
  // const sevenDaySpent = getCostsSpending(sevenDaysSpending);

  // console.log(sevenDays[1][0]["cost"]);

  // const chartData = [45, 30, 12, 55, 70, 20, 30];
  const chartData = sevenDaysSpending;

  const weeklyChartFormat = {
    labels: getDateArray(objGroupedByRecentDate),
    datasets: [
      {
        label: "Total spending (£)",
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
