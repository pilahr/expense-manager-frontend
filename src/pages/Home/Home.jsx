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
  const dateArr = getDateArray(objGroupedByRecentDate);

  const cleanedDate = dateArr.map((date) => date.split(" ")[0]);
  //['21', '20', '19', '17', '16', '14', '5']

  // TOTAL COSTS FOR THE LAST SEVEN DAYS
  const dayOneArr = recentlySpent
    .filter((spend) => spend.date === cleanedDate[0])
    .map((spending) => spending.cost);
  const sumDayOne = (dayOneArr) => {
    let sum = 0;
    for (let i = 0; i < dayOneArr.length; i++) {
      sum += dayOneArr[i];
    }
    return sum.toFixed(2);
  };
  const totalDayOne = sumDayOne(dayOneArr);

  //=================================================
  const dayTwoArr = recentlySpent
    .filter((spend) => spend.date === cleanedDate[1])
    .map((spending) => spending.cost);

  const sumDayTwo = (dayTwoArr) => {
    let sum = 0;
    for (let i = 0; i < dayTwoArr.length; i++) {
      sum += dayTwoArr[i];
    }
    return sum.toFixed(2);
  };
  const totalDayTwo = sumDayTwo(dayTwoArr);

  //=================================================
  const dayThreeArr = recentlySpent
    .filter((spend) => spend.date === cleanedDate[2])
    .map((spending) => spending.cost);

  const sumDayThree = (dayThreeArr) => {
    let sum = 0;
    for (let i = 0; i < dayThreeArr.length; i++) {
      sum += dayThreeArr[i];
    }
    return sum.toFixed(2);
  };
  const totalDayThree = sumDayThree(dayThreeArr);
  //=================================================
  const dayFourArr = recentlySpent
    .filter((spend) => spend.date === cleanedDate[3])
    .map((spending) => spending.cost);

  const sumDayFour = (dayFourArr) => {
    let sum = 0;
    for (let i = 0; i < dayFourArr.length; i++) {
      sum += dayFourArr[i];
    }
    return sum.toFixed(2);
  };
  const totalDayFour = sumDayFour(dayFourArr);
  //=================================================
  const dayFiveArr = recentlySpent
    .filter((spend) => spend.date === cleanedDate[4])
    .map((spending) => spending.cost);

  const sumDayFive = (dayFiveArr) => {
    let sum = 0;
    for (let i = 0; i < dayFiveArr.length; i++) {
      sum += dayFiveArr[i];
    }
    return sum.toFixed(2);
  };
  const totalDayFive = sumDayFive(dayFiveArr);
  //=================================================
  const daySixArr = recentlySpent
    .filter((spend) => spend.date === cleanedDate[5])
    .map((spending) => spending.cost);

  const sumDaySix = (daySixArr) => {
    let sum = 0;
    for (let i = 0; i < daySixArr.length; i++) {
      sum += daySixArr[i];
    }
    return sum.toFixed(2);
  };
  const totalDaySix = sumDaySix(daySixArr);
  //=================================================
  const daySevenArr = recentlySpent
    .filter((spend) => spend.date === cleanedDate[6])
    .map((spending) => spending.cost);

  const sumDaySeven = (daySevenArr) => {
    let sum = 0;
    for (let i = 0; i < daySevenArr.length; i++) {
      sum += daySevenArr[i];
    }
    return sum.toFixed(2);
  };
  const totalDaySeven = sumDaySeven(daySevenArr);
  //=================================================

  const chartData = () => {
    let data = [];
    data.push(totalDayOne);
    data.push(totalDayTwo);
    data.push(totalDayThree);
    data.push(totalDayFour);
    data.push(totalDayFive);
    data.push(totalDaySix);
    data.push(totalDaySeven);
    return data;
  };

  const totalSpentForTheLastSevenDays = chartData();

  const weeklyChartFormat = {
    labels: getDateArray(objGroupedByRecentDate),
    datasets: [
      {
        label: "Total spending (£)",
        data: totalSpentForTheLastSevenDays,
        backgroundColor: "rgba(241, 163, 203, 0.8)",
        barPercentage: 0.9,
        hoverBackgroundColor: "rgba(244, 0, 126, 0.8)",
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
