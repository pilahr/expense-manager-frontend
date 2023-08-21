import React from "react";
import "./WeeklyGraph.scss";
import { Bar } from "react-chartjs-2";


const WeeklyGraph = ({ chartData }) => {
  return (
    <div className="weeklyGraph">
      <Bar data={chartData} />
    </div>
  );
};

export default WeeklyGraph;
