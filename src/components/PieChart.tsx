// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

interface chartProps {
chartData: any
}

function PieChart({ chartData }: chartProps) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <div style={{height: "400px", display: 'flex', alignItems: "center", justifyContent: "center"}}>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Weekly contributions made per user"
            }
          }
        }}
      /> </div>
    </div>
  );
}
export default PieChart;