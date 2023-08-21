import React from "react";
import "./TotalMonthlyChart.scss";
import { Bar } from "react-chartjs-2";

const TotalMonthlyChart = ({ chartData }) => {
  return (
    <div className="totalMonthlyChart">
      <Bar data={chartData} />
    </div>
  );
};

export default TotalMonthlyChart;
