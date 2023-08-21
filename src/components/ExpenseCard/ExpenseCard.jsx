import React, { useState } from "react";
import "./ExpenseCard.scss";
import { useParams, useNavigate } from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";

const ExpenseCard = ({
  name,
  cost,
  category,
  date,
  month,
  year,
  iconStyle,
}) => {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  // const [expense, setExpense] = useState([]);

  const handleTouchStart = (event) => {
    const touchStartX = event.touches[0].clientX;
    const touchStartY = event.touches[0].clientY;
    setSwipeDirection(null);

    event.currentTarget.addEventListener("touchmove", (moveEvent) => {
      const touchMoveX = moveEvent.touches[0].clientX;
      const touchMoveY = moveEvent.touches[0].clientY;
      const deltaX = touchMoveX - touchStartX;
      const deltaY = touchMoveY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setSwipeDirection(deltaX > 0 ? "right" : "left");
      }
    });
  };

  // event.currentTarget.addEventListener("touchend", () => {
  //   setSwipeDirection(null);
  //   event.currentTarget.removeEventListener("touchmove");
  // });

  // const getExpenseById = async (id) => {
  //   const url = `http://localhost:8080/expense/${id}`;
  //   // const url = `https://expense-manager-backend-seven.vercel.app/expense/${id}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   setExpense(data);
  // };

  // useEffect(() => {
  //   getExpenseById(id);
  // }, [id]);

  const handleDelete = async () => {
    // const url = `http://localhost:8080/expense/${id}`;
    const url = `https://expense-manager-backend-seven.vercel.app/expense/${id}`;
    const result = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Expense deleted");
      navigate("/spending");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const cleanedMonth = new Date(month).toDateString().split(" ")[1];

  return (
    <div
      className={`expense-card ${
        swipeDirection === "left" ? "swipe-left" : ""
      }`}
      onTouchStart={handleTouchStart}
    >
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
      {swipeDirection === "left" && (
        <div className="expense-card__delete-overlay">
          <DeleteButton handleDelete={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default ExpenseCard;
