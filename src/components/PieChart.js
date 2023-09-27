// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container" style={{backgroundColor: 'lightblue', height: '500px', textAlign: 'center', paddingBottom: '200px'}}>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <div style={{height: "500px", display: 'flex', alignItems: "center", justifyContent: "center"}}>
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