import React from "react";
import "./DoughnutChart.scss";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ data }) => {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
