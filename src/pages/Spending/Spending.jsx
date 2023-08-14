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

const Spending = ({ expense }) => {
  const expenseWithSortedDate = expense
    .sort((a, b) => a.year - b.year)
    .sort((a, b) => new Date(a.month) - new Date(b.month))
    .sort((a, b) => a.date - b.date);

  return (
    <div className="spending-page">
      <div>
        <Heading title="Spending" />
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
