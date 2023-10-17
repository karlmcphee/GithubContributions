// components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

interface chartProps {
  chartData: any
  }

export const BarChart = ({ chartData }: chartProps) => {
  return (
    <div  className="chart-container">
      <h2 style={{ textAlign: "center"}}>Bar Chart</h2>
      <div style={{height: "200px", display: 'flex', alignItems: "center", justifyContent: "center"}}>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Weekly contributions made per user"
            },
            legend: {
              display: false
            }
          }
        }}
      />
      </div>
    </div>
  );
};