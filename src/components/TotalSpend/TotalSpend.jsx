import React from "react";
import "./TotalSpend.scss";

const TotalSpend = ({ recentlySpent }) => {
  const spentArray = recentlySpent.map((spending) => spending.cost);

  const findTotalSpent = (spentArray) => {
    let sum = 0;
    for (let i = 0; i < spentArray.length; i++) {
      sum += spentArray[i];
    }
    return sum
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const totalSpentThisMonth = findTotalSpent(spentArray);

  return (
    <div className="total-spend">
      <p className="total-spend__text1">This month spend</p>
      <h1 className="total-spend__text2">£ {totalSpentThisMonth}</h1>
    </div>
  );
};

export default TotalSpend;
