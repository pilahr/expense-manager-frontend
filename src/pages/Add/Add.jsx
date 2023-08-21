import React from "react";
import "./Add.scss";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";

const Add = ({ expense }) => {
  const navigate = useNavigate();

  const handleSubmit = async (expense) => {
    const result = await fetch(
      "https://expense-manager-backend-seven.vercel.app/expense",
      {
        // const result = await fetch("http://localhost:8080/expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      }
    );

    if (result.ok) {
      alert("Expense added");
      const expense = await result.json();
      console.log(expense);
      navigate("/spending");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    name: "",
    cost: "",
    category: "",
    date: "",
    month: "",
    year: "",
  };

  return (
    <div className="add-page">
      <div>
        <Heading title="Add Expenses" />
      </div>
      <div>
        <AddExpenseForm
          expense={expense}
          handleSubmit={handleSubmit}
          defaultFormState={defaultFormState}
        />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Add;
