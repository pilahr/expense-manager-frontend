import React from "react";
import "./CategorySummaryCard.scss";

const CategorySummaryCard = ({ spending, category, iconStyle }) => {
  return (
    <div className="categorySummaryCard">
      <div className="categorySummaryCard__icon">
        <img
          src={iconStyle}
          alt="icon"
          className="categorySummaryCard__icon--icon"
        />
      </div>

      <div className="categorySummaryCard__main">
        <p className="categorySummaryCard__main--text-p">{category}</p>
        <h2 className="categorySummaryCard__main--text-h2">£{spending}</h2>
      </div>
    </div>
  );
};

export default CategorySummaryCard;
