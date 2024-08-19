import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  // Generate labels for the last 90 days
  const generateLabels = (days) => {
    return Array.from({ length: days }, (_, i) =>
      dayjs()
        .subtract(days - i - 1, "day")
        .format("MMM DD")
    );
  };

  // Sample data for 90 days with monetary values
  const fullData = {
    labels: generateLabels(90),
    datasets: [
      {
        data: Array.from({ length: 90 }, () =>
          (25 + Math.random() * 100).toFixed(2)
        ),
        backgroundColor: "rgba(255, 197, 197, 0.7)",
        borderColor: "rgb(255, 197, 197)",
        borderWidth: 2,
      },
    ],
  };

  // State for the chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Function to update the chart based on the number of days
  const updateChart = (days) => {
    setChartData({
      labels: fullData.labels.slice(-days),
      datasets: [
        {
          ...fullData.datasets[0],
          data: fullData.datasets[0].data.slice(-days),
        },
      ],
    });
  };

  // Initialize the chart with 7 days of data
  useEffect(() => {
    updateChart(7);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 2,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Data",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Zyski",
                  },
                  ticks: {
                    callback: function (value) {
                      return value + " PLN";
                    },
                    stepSize: 25,
                    precision: 0,
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },

                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return context.parsed.y + " PLN";
                    },
                  },
                },
              },
            }}
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <button onClick={() => updateChart(7)}>7 Days</button>
        </Col>
        <Col>
          <button onClick={() => updateChart(30)}>30 Days</button>
        </Col>
        <Col>
          <button onClick={() => updateChart(90)}>90 Days</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ChartComponent;
