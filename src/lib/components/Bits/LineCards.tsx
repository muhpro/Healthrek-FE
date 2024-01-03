import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line as Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: true,
        font: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
        },
      },
    },
  },
  elements: {
    point: {
      pointBorderWidth: 0.5,
      backgroundColor: '#000000',
    },
    line: {
      borderColor: '#000000',
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'right' as const,
    },
    datalabels: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#ffd7bd',
      titleColor: '#ffd7bd',
      padding: { x: 20, y: 4 } as unknown as number,
      titleFont: {
        size: 0,
      },
      bodyFont: {
        size: 8,
        fontFamily: '"Baloo Bhai 2", cursive',
        weight: 'bold',
      },
      bodyColor: '#000',
      cornerRadius: 10,
      displayColors: false,
      caretPadding: 0,
      bodyAlign: 'center' as 'center',
      titleMarginBottom: 0,
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      data: [0, 400, 900, 1700, 4000, 1000, 2000],
    },
  ],
};

export default function LineChart() {
  return <Chart options={options as any} data={data} />;
}
