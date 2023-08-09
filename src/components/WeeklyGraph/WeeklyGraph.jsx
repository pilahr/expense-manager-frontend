import React from "react";
import "./WeeklyGraph.scss";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJs } from "chart.js/auto";

const WeeklyGraph = ({ chartData }) => {
  return (
    <div className="weeklyGraph">
      <Bar data={chartData} />
    </div>
  );
};

export default WeeklyGraph;
