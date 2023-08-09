import React from "react";
import "./AddExpenseForm.scss";
import Button from "../../components/Button/Button";

const AddExpenseForm = () => {
  const categories = [
    "Food",
    "Snack",
    "Coffee",
    "Alcohol Beverage",
    "Transportation",
    "Ticket",
    "Shopping",
    "Subscription",
  ];

  const getDate = () => {
    let date = [];
    for (let i = 1; i <= 31; i++) {
      date.push(i);
    }
    return date;
  };
  const dates = getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getYear = () => {
    let year = [];
    for (let i = 2023; i <= 2050; i++) {
      year.push(i);
    }
    return year;
  };
  const years = getYear();

  return (
    <div className="add-expense-form">
      <h3 className="add-expense-form__heading">New Expense</h3>
      <label className="add-expense-form__label">Name</label>
      <input className="add-expense-form__input" />
      <label className="add-expense-form__label">Cost</label>
      <input className="add-expense-form__input" />
      <label className="add-expense-form__label">Category</label>
      <select className="add-expense-form__select">
        <option>Please select the option</option>
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>

      <div className="dmy-block">
        <div className="dmy-block__block">
          <label className="add-expense-form__label">Date</label>
          <select className="dmy-block__block--select">
            <option>Date</option>
            {dates.map((date, index) => (
              <option key={index}>{date}</option>
            ))}
          </select>
        </div>

        <div className="dmy-block__block">
          <label className="add-expense-form__label">Month</label>
          <select className="dmy-block__block--select">
            <option>Month</option>
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
        </div>

        <div className="dmy-block__block">
          <label className="add-expense-form__label">Year</label>
          <select className="dmy-block__block--select">
            <option>Year</option>
            {years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="add-expense-form__button">
        <Button buttonText="Add" func="add" onClick={getDate} />
      </div>
    </div>
  );
};

export default AddExpenseForm;
