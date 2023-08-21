import React from "react";
import "./Spending.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import FoodIcon from "../../assets/icons/food.png";
import SnackIcon from "../../assets/icons/snack.png";
import CoffeeIcon from "../../assets/icons/coffee.png";
import AlcoholIcon from "../../assets/icons/beer.png";
import TransportIcon from "../../assets/icons/transportation.png";
import EntertainmentIcon from "../../assets/icons/ticket.png";
import ShoppingIcon from "../../assets/icons/shopping.png";
import SubscriptionIcon from "../../assets/icons/subscription.png";
import TotalMonthlyChart from "../../components/TotalMonthlyChart/TotalMonthlyChart";

// eslint-disable-next-line
import { Chart as ChartJs } from "chart.js/auto";

const Spending = ({ expense }) => {
  const expenseWithSortedDate = expense
    .sort((a, b) => a.year - b.year)
    .sort((a, b) => new Date(a.month) - new Date(b.month))
    .sort((a, b) => a.date - b.date);

  const thisMonth = new Date().toDateString().split(" ")[1];

  const monthToNumber = (month) => {
    return new Date(Date.parse("1 " + month)).getMonth() + 1;
  };

  // Getting 6 months data from the latest month
  const dataForTheChart = expenseWithSortedDate.filter(
    (spending) =>
      spending.month <= monthToNumber(thisMonth) &&
      spending.month >= monthToNumber(thisMonth) - 5
  );

  const monthOneArr = dataForTheChart
    .filter((spend) => parseInt(spend.month) === monthToNumber(thisMonth) - 5)
    .map((spending) => spending.cost);

  const sumMonthOne = (monthOneArr) => {
    let sum = 0;
    for (let i = 0; i < monthOneArr.length; i++) {
      sum += monthOneArr[i];
    }
    return sum.toFixed(2);
  };
  const totalMonthOne = sumMonthOne(monthOneArr);
  //=================================================

  const monthTwoArr = dataForTheChart
    .filter((spend) => parseInt(spend.month) === monthToNumber(thisMonth) - 4)
    .map((spending) => spending.cost);

  const sumMonthTwo = (monthTwoArr) => {
    let sum = 0;
    for (let i = 0; i < monthTwoArr.length; i++) {
      sum += monthTwoArr[i];
    }
    return sum.toFixed(2);
  };
  const totalMonthTwo = sumMonthTwo(monthTwoArr);
  //=================================================

  const monthThreeArr = dataForTheChart
    .filter((spend) => parseInt(spend.month) === monthToNumber(thisMonth) - 3)
    .map((spending) => spending.cost);

  const sumMonthThree = (monthThreeArr) => {
    let sum = 0;
    for (let i = 0; i < monthThreeArr.length; i++) {
      sum += monthThreeArr[i];
    }
    return sum.toFixed(2);
  };
  const totalMonthThree = sumMonthThree(monthThreeArr);
  //=================================================

  const monthFourArr = dataForTheChart
    .filter((spend) => parseInt(spend.month) === monthToNumber(thisMonth) - 2)
    .map((spending) => spending.cost);

  const sumMonthFour = (monthFourArr) => {
    let sum = 0;
    for (let i = 0; i < monthFourArr.length; i++) {
      sum += monthFourArr[i];
    }
    return sum.toFixed(2);
  };
  const totalMonthFour = sumMonthFour(monthFourArr);
  //=================================================

  const monthFiveArr = dataForTheChart
    .filter((spend) => parseInt(spend.month) === monthToNumber(thisMonth) - 1)
    .map((spending) => spending.cost);

  const sumMonthFive = (monthFiveArr) => {
    let sum = 0;
    for (let i = 0; i < monthFiveArr.length; i++) {
      sum += monthFiveArr[i];
    }
    return sum.toFixed(2);
  };
  const totalMonthFive = sumMonthFive(monthFiveArr);
  //=================================================

  const monthSixArr = dataForTheChart
    .filter((spend) => parseInt(spend.month) === monthToNumber(thisMonth))
    .map((spending) => spending.cost);

  const sumMonthSix = (monthSixArr) => {
    let sum = 0;
    for (let i = 0; i < monthSixArr.length; i++) {
      sum += monthSixArr[i];
    }
    return sum.toFixed(2);
  };
  const totalMonthSix = sumMonthSix(monthSixArr);
  //=================================================

  const chartData = () => {
    let data = [];
    data.push(totalMonthOne);
    data.push(totalMonthTwo);
    data.push(totalMonthThree);
    data.push(totalMonthFour);
    data.push(totalMonthFive);
    data.push(totalMonthSix);
    return data;
  };
  const monthlyTotalSpent = chartData();

  const chartLabel = () => {
    let label = [];
    label.push(
      new Date((monthToNumber(thisMonth) - 5).toString())
        .toDateString()
        .split(" ")[1]
    );
    label.push(
      new Date((monthToNumber(thisMonth) - 4).toString())
        .toDateString()
        .split(" ")[1]
    );
    label.push(
      new Date((monthToNumber(thisMonth) - 3).toString())
        .toDateString()
        .split(" ")[1]
    );
    label.push(
      new Date((monthToNumber(thisMonth) - 2).toString())
        .toDateString()
        .split(" ")[1]
    );
    label.push(
      new Date((monthToNumber(thisMonth) - 1).toString())
        .toDateString()
        .split(" ")[1]
    );
    label.push(
      new Date(monthToNumber(thisMonth).toString()).toDateString().split(" ")[1]
    );
    return label;
  };
  const labelForChart = chartLabel();

  const totalMonthlyChartFormat = {
    labels: labelForChart,
    datasets: [
      {
        label: "Total spending (£)",
        data: monthlyTotalSpent,
        backgroundColor: "rgba(216, 169, 250, 0.8)",
        barPercentage: 0.9,
        hoverBackgroundColor: "rgba(149, 0, 255, 0.8)",
      },
    ],
  };

  return (
    <div className="spending-page">
      <div>
        <Heading title="Spending" />
      </div>

      <div>
        <TotalMonthlyChart chartData={totalMonthlyChartFormat} />
      </div>

      <div className="spending-page__container">
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">January</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "1")
            .map((spending, index) => {
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

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">February</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "2")
            .map((spending, index) => {
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

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">March</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "3")
            .map((spending, index) => {
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
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">April</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "4")
            .map((spending, index) => {
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
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">May</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "5")
            .map((spending, index) => {
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
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">June</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "6")
            .map((spending, index) => {
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
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">July</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "7")
            .map((spending, index) => {
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

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">August</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "8")
            .map((spending, index) => {
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

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">September</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "9")
            .map((spending, index) => {
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

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">October</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "10")
            .map((spending, index) => {
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

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">November</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "11")
            .map((spending, index) => {
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

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">December</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "12")
            .map((spending, index) => {
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

      <div className="spending-page__navBar">
        <NavBar />
      </div>
    </div>
  );
};

export default Spending;
