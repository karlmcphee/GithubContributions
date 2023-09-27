// components/BarChart.js
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div style={{textAlign: "center", backgroundColor: "lightblue"}}>
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
    </div>
  );
};