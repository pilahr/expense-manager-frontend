import React, { useState } from "react";
import "./AddExpenseForm.scss";
import Button from "../../components/Button/Button";

const AddExpenseForm = ({ expense, handleSubmit, defaultFormState }) => {
  const [expenseData, setExpenseData] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();
    handleSubmit(expenseData);
  };

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
    <form className="add-expense-form" onSubmit={handleValidation}>
      <h3 className="add-expense-form__heading">New Expense</h3>

      <label className="add-expense-form__label">Name</label>
      <input
        className="add-expense-form__input"
        type="text"
        value={expense.name}
        onInput={(event) =>
          setExpenseData({ ...expenseData, name: event.target.value })
        }
      />

      <label className="add-expense-form__label">Cost</label>
      <input
        className="add-expense-form__input"
        value={expense.cost}
        onInput={(event) =>
          setExpenseData({ ...expenseData, cost: event.target.value })
        }
      />

      <label className="add-expense-form__label">Category</label>
      <select
        className="add-expense-form__select"
        onChange={(event) =>
          setExpenseData({ ...expenseData, category: event.target.value })
        }
      >
        <option>Please select the option</option>
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>

      <div className="dmy-block">
        <div className="dmy-block__block">
          <label className="add-expense-form__label">Date</label>
          <select
            className="dmy-block__block--select"
            onChange={(event) =>
              setExpenseData({ ...expenseData, date: event.target.value })
            }
          >
            <option>Date</option>
            {dates.map((date, index) => (
              <option key={index}>{date}</option>
            ))}
          </select>
        </div>

        <div className="dmy-block__block">
          <label className="add-expense-form__label">Month</label>
          <select
            className="dmy-block__block--select"
            onChange={(event) =>
              setExpenseData({ ...expenseData, month: event.target.value })
            }
          >
            <option>Month</option>
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
        </div>

        <div className="dmy-block__block">
          <label className="add-expense-form__label">Year</label>
          <select
            className="dmy-block__block--select"
            onChange={(event) =>
              setExpenseData({ ...expenseData, year: event.target.value })
            }
          >
            <option>Year</option>
            {years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="add-expense-form__button">
        <Button buttonText="Add" func="add" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default AddExpenseForm;
