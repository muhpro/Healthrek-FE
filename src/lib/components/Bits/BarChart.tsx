import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar as Chart } from "react-chartjs-2";
  import ChartDataLabels from "chartjs-plugin-datalabels";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );
  
  export const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false as false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          padding: 20,
          font: {
            size: 8,
            fontFamily: '"Baloo Bhai 2", cursive',
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "right" as const,
      },
      datalabels: {
        color: "#fff",
        font: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
        },
      },
      tooltip: {
        backgroundColor: "#ffd7bd",
        // titleColor: "#ffd7bd",
        padding: { x: 20, y: 4 } as unknown as number,
        titleFont: {
          size: 0,
        },
        bodyFont: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
          weight: "bold",
        },
        bodyColor: "#000",
        cornerRadius: 4,
        displayColors: false,
        caretPadding: 0,
        bodyAlign: "center" as "center",
        titleMarginBottom: 0,
      },
    },
  };
  
  const labels = ["Payments", "Savings", "Investments", "Loans"];
  
  export const data = {
    labels,
    datasets: [
      {
        data: [90000, 40000, 90000, 30000],
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
    ],
  };
  
  export function BarChart() {
    return <Chart options={options} data={data} />;
  }
  