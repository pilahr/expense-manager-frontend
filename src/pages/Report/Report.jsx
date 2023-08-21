import React from "react";
import "./Report.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";
import SpendingSummary from "../../components/SpendingSummary/SpendingSummary";
// eslint-disable-next-line
import { Chart as ChartJs } from "chart.js/auto";

const Report = ({ expense }) => {
  const categories = [
    "Food",
    "Snack",
    "Coffee",
    "Alcohol Beverage",
    "Transportation",
    "Entertainment",
    "Shopping",
    "Subscription",
  ];

  const thisMonth = new Date().toDateString().split(" ")[1];

  const getRecentMonthSpending = (expense) => {
    return expense
      .filter((spend) => new Date(spend.year))
      .filter(
        (spend) =>
          new Date(spend.month).toDateString().split(" ")[1] === thisMonth
      )
      .sort((a, b) => (a.category > b.category) - (a.category < b.category));
  };
  const thisMonthSpending = getRecentMonthSpending(expense);

  //TOTAL COSTS OF EACH CATEGORIES
  const alcCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Alcohol Beverage")
    .map((spending) => spending.cost);

  const getAlcCost = (alcCostsArr) => {
    let sum = 0;
    for (let i = 0; i < alcCostsArr.length; i++) {
      sum += alcCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalAlcCost = getAlcCost(alcCostsArr);
//---------------------------------------------------
  const coffeeCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Coffee")
    .map((spending) => spending.cost);

  const getCoffeeCost = (coffeeCostsArr) => {
    let sum = 0;
    for (let i = 0; i < coffeeCostsArr.length; i++) {
      sum += coffeeCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalCoffeeCost = getCoffeeCost(coffeeCostsArr);
//---------------------------------------------------
  const entertainmentCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Entertainment")
    .map((spending) => spending.cost);

  const getEntertainmentCost = (entertainmentCostsArr) => {
    let sum = 0;
    for (let i = 0; i < entertainmentCostsArr.length; i++) {
      sum += entertainmentCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalEntertainmentCost = getEntertainmentCost(entertainmentCostsArr);
//---------------------------------------------------
  const foodCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Food")
    .map((spending) => spending.cost);

  const getFoodCost = (foodCostsArr) => {
    let sum = 0;
    for (let i = 0; i < foodCostsArr.length; i++) {
      sum += foodCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalFoodCost = getFoodCost(foodCostsArr);
//---------------------------------------------------
  const shoppingCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Shopping")
    .map((spending) => spending.cost);

  const getShoppingCost = (shoppingCostsArr) => {
    let sum = 0;
    for (let i = 0; i < shoppingCostsArr.length; i++) {
      sum += shoppingCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalShoppingCost = getShoppingCost(shoppingCostsArr);
//---------------------------------------------------
  const snackCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Snack")
    .map((spending) => spending.cost);

  const getSnackCost = (snackCostsArr) => {
    let sum = 0;
    for (let i = 0; i < snackCostsArr.length; i++) {
      sum += snackCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalSnackCost = getSnackCost(snackCostsArr);
//---------------------------------------------------
  const subscriptionCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Subscription")
    .map((spending) => spending.cost);

  const getSubscriptionCost = (subscriptionCostsArr) => {
    let sum = 0;
    for (let i = 0; i < subscriptionCostsArr.length; i++) {
      sum += subscriptionCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalSubscriptionCost = getSubscriptionCost(subscriptionCostsArr);
//---------------------------------------------------
  const transportationCostsArr = thisMonthSpending
    .filter((spend) => spend.category === "Transportation")
    .map((spending) => spending.cost);

  const getTransportationCost = (transportationCostsArr) => {
    let sum = 0;
    for (let i = 0; i < transportationCostsArr.length; i++) {
      sum += transportationCostsArr[i];
    }
    return sum.toFixed(2);
  };
  const totalTransportationCost = getTransportationCost(transportationCostsArr);
//---------------------------------------------------
  const chartData = () => {
    let data = [];
    data.push(totalAlcCost);
    data.push(totalCoffeeCost);
    data.push(totalEntertainmentCost);
    data.push(totalFoodCost);
    data.push(totalShoppingCost);
    data.push(totalSnackCost);
    data.push(totalSubscriptionCost);
    data.push(totalTransportationCost);
    return data;
  };

  const totalSpentOnEachCategory = chartData();

  const data = {
    labels: categories.sort(),
    datasets: [
      {
        label: "Spent (£)",
        data: totalSpentOnEachCategory,
        backgroundColor: [
          "rgb(255,192,203)",
          "rgb(135,206,250)",
          "rgb(255, 205, 86)",
          "rgb(255,140,0)",
          "rgb(32,178,170)",
          "rgb(144,238,144)",
          "rgb(216,191,216)",
          "rgb(255,228,196)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="report-page">
      <div>
        <Heading title="Report" />
      </div>
      <div className="report-page__main">
        <h2 className="report-page__main--text">
          {thisMonth.toUpperCase()} SPENDING
        </h2>
        <DoughnutChart data={data} />
        <SpendingSummary
          totalSpentOnEachCategory={totalSpentOnEachCategory}
          categories={categories.sort()}
        />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Report;
