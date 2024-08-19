import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SalesDashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"], // Example labels
    datasets: [
      {
        label: "Sales Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40], // Example data
        fill: false,
        backgroundColor: "rgb(242,128,145)",
        borderColor: "rgba(242,128,145, 0.2)",
      },
      {
        label: "Sales Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90], // Example data
        fill: false,
        backgroundColor: "rgb(84,129,194)",
        borderColor: "rgba(84,129,194, 0.2)",
      },
    ],
  };

  return (
    <div className="graph">
      <h2>Statystyki sprzedaży</h2>
      <div className="d-flex align-items-center mb-4">
        <div className="m-3">
          <label className="m-2">Od:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control"
          />
        </div>
        <div className="m-3">
          <label className="m-2">Do:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="form-control"
          />
        </div>
      </div>
      <div>
        <Line data={data} />
      </div>
    </div>
  );
}

export default SalesDashboard;
