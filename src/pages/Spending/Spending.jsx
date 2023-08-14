import React from "react";
import "./Spending.scss";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";

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
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">February</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "2")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">March</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "3")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">April</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "4")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">May</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "5")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">June</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "6")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>
        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">July</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "7")
            .map((spending, index) => {
              return (
                <div>
                  <h4>
                    {new Date(spending.month).toDateString().split(" ")[1]}
                  </h4>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">August</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "8")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">September</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "9")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">October</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "10")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">November</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "11")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
              );
            })}
        </div>

        <div className="spending-page__expense-card">
          <h4 className="spending-page__expense-card--month">December</h4>
          {expenseWithSortedDate
            .sort((a, b) => a.month - b.month)
            .filter((spend) => spend.month === "12")
            .map((spending, index) => {
              return (
                <div>
                  <ExpenseCard
                    key={index}
                    name={spending.name}
                    cost={spending.cost}
                    category={spending.category}
                    date={spending.date}
                    month={spending.month}
                    year={spending.year}
                  />
                </div>
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
