import React from "react";
import "./SpendingSummary.scss";
import CategorySummaryCard from "../CategorySummaryCard/CategorySummaryCard";
import FoodIcon from "../../assets/icons/food.png";
import SnackIcon from "../../assets/icons/snack.png";
import CoffeeIcon from "../../assets/icons/coffee.png";
import AlcoholIcon from "../../assets/icons/beer.png";
import TransportIcon from "../../assets/icons/transportation.png";
import EntertainmentIcon from "../../assets/icons/ticket.png";
import ShoppingIcon from "../../assets/icons/shopping.png";
import SubscriptionIcon from "../../assets/icons/subscription.png";

const SpendingSummary = ({ totalSpentOnEachCategory, categories }) => {
  //['4.34', '7.29', '169.00', '5.64', '47.70', '0.00', '0.00', '25.00']
  //['Alcohol Beverage', 'Coffee', 'Entertainment', 'Food', 'Shopping', 'Snack', 'Subscription', 'Transportation']

  const obj = {};
  categories.forEach((key, i) => (obj[key] = totalSpentOnEachCategory[i]));
  //{Alcohol Beverage: '4.34', Coffee: '7.29', Entertainment: '169.00', Food: '5.64', Shopping: '47.70', …}

  const results = Object.entries(obj).map(([key, value]) => `${key}_${value}`);
  //(8) ['Alcohol Beverage_4.34', 'Coffee_7.29', 'Entertainment_169.00', 'Food_5.64', 'Shopping_47.70', 'Snack_0.00', 'Subscription_0.00', 'Transportation_25.00']

  return (
    <div className="spendingSummary">
      <p className="spendingSummary__text">SPENDING</p>
      {results.map((result, index) => {
        const cleanedCategory = result.split("_")[0];
        const cleanedCost = result.split("_")[1];
        let iconStyle = "";
        switch (cleanedCategory) {
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
          <CategorySummaryCard
            key={index}
            spending={cleanedCost}
            category={cleanedCategory}
            iconStyle={iconStyle}
          />
        );
      })}
    </div>
  );
};

export default SpendingSummary;
