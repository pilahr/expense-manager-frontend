import React from "react";
import "./Add.scss";
// import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import NavBar from "../../components/NavBar/NavBar";
import AddExpenseForm from "../../components/AddExpenseForm/AddExpenseForm";

const Add = (
  // { expensesData }
  ) => {
  // const navigate = useNavigate();

  // const handleSubmit = async (expensesData) => {
  //   const result = await fetch(
  //     "https://my-journey-new-backend.vercel.app/holidays",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(expensesData),
  //     }
  //   );

  //   if (result.ok) {
  //     alert("Expense added");
  //     const expensesData = await result.json();
  //     navigate("/add");
  //   } else {
  //     const message = await result.text();
  //     alert(message);
  //   }
  // };

  // const defaultFormState = {
  //   name: "",
  //   cost: "",
  //   category:"",
  //   date: new Date(),
  //   month: "",
  //   year: "",
  // };

  return (
    <div className="add-page">
      <div>
        <Heading title="Add Expenses" />
      </div>
      <div>
        <AddExpenseForm
          // expensesData={expensesData}
          // handleSubmit={handleSubmit}
          // defaultFormState={defaultFormState}
        />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Add;
