import React from "react";
import "./ExpenseCard.scss";

const ExpenseCard = ({
  name,
  cost,
  category,
  date,
  month,
  year,
  iconStyle,
}) => {
  const cleanedMonth = new Date(month).toDateString().split(" ")[1];

  return (
    <div className="expense-card">
      <div className="expense-card__icon">
        <img className="expense-card__icon--icon" src={iconStyle} alt="icon" />
      </div>
      <div className="expense-card__text-container">
        <div className="expense-card__text-container--left">
          <h3 className="expense-card-lt-h3">{name}</h3>
          <p className="expense-card-lt-p">{category}</p>
        </div>
        <div className="expense-card__text-container--right">
          <h3 className="expense-card-rt-h3">£{cost}</h3>
          <p className="expense-card-rt-p">
            {date} {cleanedMonth} {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
